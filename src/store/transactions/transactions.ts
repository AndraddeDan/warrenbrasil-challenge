import { Module } from "vuex";
import { AxiosError } from "axios";
import { TransactionService } from "@/services";
import { DateGroup, Transaction } from "@/models";
import { TransactionState } from "./transaction-state";
import { TransactionCommits } from "./transaction-commits";
import { RootState } from "../root-state";

const { SET_LIST, SET_FETCH_LIST } = TransactionCommits;

const groupTransactionByDate = (
  list: Transaction[]
): DateGroup<Transaction>[] => {
  return list.reduce((groupList: DateGroup<Transaction>[], transaction) => {
    const group = groupList.find((v) => v.date === transaction.date);

    const { date } = transaction;
    const list = [transaction];

    group ? group.list.push(transaction) : groupList.push({ date, list });

    return groupList;
  }, []);
};

export const transactions: Module<TransactionState, RootState> = {
  namespaced: true,
  state: {
    transactionList: [],
    isFetchingList: false,
    isFetchingById: false,
    canShowAmount: true,
  },
  getters: {
    transactionListGroupByDate: (state: TransactionState) =>
      groupTransactionByDate(state.transactionList),
    transactionList: (state: TransactionState) => state.transactionList,
    isFetchingList: (state: TransactionState) => state.isFetchingList,
    isFetchingById: (state: TransactionState) => state.isFetchingById,
  },
  mutations: {
    SET_LIST(state: TransactionState, { transactionList }: TransactionState) {
      state.transactionList = transactionList;
    },
    SET_FETCH_LIST(
      state: TransactionState,
      { isFetchingList }: TransactionState
    ) {
      state.isFetchingList = isFetchingList;
    },
  },
  actions: {
    transactionList({ commit }): Promise<Transaction[]> {
      commit(SET_FETCH_LIST, true);
      return new Promise((resolve, reject) => {
        TransactionService.getTransactionList()
          .then((transactionList: Transaction[]) => {
            commit(SET_LIST, { transactionList });
            resolve(transactionList);
          })
          .catch((error: AxiosError) => reject(error))
          .finally(() => commit(SET_FETCH_LIST, false));
      });
    },
  },
};
