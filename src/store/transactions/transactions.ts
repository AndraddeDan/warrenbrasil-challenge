import { Module } from "vuex";
import { AxiosError } from "axios";
import { TransactionService } from "@/services";
import { Transaction } from "@/models";
import { TransactionState } from "./transaction-state";
import { TransactionCommits } from "./transaction-commits";
import { RootState } from "../root-state";

const { SET_TERMS } = TransactionCommits;

export const transactions: Module<TransactionState, RootState> = {
  namespaced: true,
  state: {
    transactionList: null,
  },
  getters: {
    transactionList: (state: TransactionState) => state.transactionList,
  },
  mutations: {
    SET_TERMS(state: TransactionState, { transactionList }: TransactionState) {
      state.transactionList = transactionList;
    },
  },
  actions: {
    transactionList({ commit }): Promise<Transaction[]> {
      return new Promise((resolve, reject) => {
        TransactionService.getTransactionList()
          .then((transactionList: Transaction[]) => {
            commit(SET_TERMS, { transactionList });
            resolve(transactionList);
          })
          .catch((error: AxiosError) => reject(error));
      });
    },
  },
};
