import { Module } from "vuex";
import { AxiosError } from "axios";
import { TransactionService } from "@/services";
import { Transaction } from "@/models";
import { TransactionState } from "./transaction-state";
import { TransactionCommits } from "./transaction-commits";
import { RootState } from "../root-state";
import { groupTransactionByDate, matchTransactionByTitle } from "./handlers";

const { SET_LIST, SET_FETCH_LIST, SET_SEARCH_BY_TITLE, SET_CAN_SHOW_AMOUNT } =
  TransactionCommits;

export const transactions: Module<TransactionState, RootState> = {
  namespaced: true,
  state: {
    transactionList: [],
    isFetchingList: false,
    canShowAmount: true,
    selectedStatus: [],
    searchedTitle: "",
  },
  getters: {
    transactionListGroupedByDate: ({
      transactionList,
      searchedTitle,
    }: TransactionState) => {
      const list = searchedTitle.trim().length
        ? transactionList.filter((t) =>
            matchTransactionByTitle(t, searchedTitle)
          )
        : transactionList;

      return groupTransactionByDate(list);
    },
    transactionList: (state: TransactionState) => state.transactionList,
    searchedTitle: (state: TransactionState) => state.searchedTitle,
    isFetchingList: (state: TransactionState) => state.isFetchingList,
    canShowAmount: (state: TransactionState) => state.canShowAmount,
  },
  mutations: {
    SET_LIST(state: TransactionState, list: Transaction[]) {
      state.transactionList = list;
    },
    SET_FETCH_LIST(state: TransactionState, isFetchingList: boolean) {
      state.isFetchingList = isFetchingList;
    },
    SET_SEARCH_BY_TITLE(state: TransactionState, searchedTitle: string) {
      state.searchedTitle = searchedTitle;
    },
    SET_CAN_SHOW_AMOUNT(state: TransactionState, canShow: boolean) {
      state.canShowAmount = canShow;
    },
  },
  actions: {
    transactionList({ commit }): Promise<Transaction[]> {
      commit(SET_FETCH_LIST, true);
      return new Promise((resolve, reject) => {
        TransactionService.getTransactionList()
          .then((transactionList: Transaction[]) => {
            commit(SET_LIST, transactionList);
            resolve(transactionList);
          })
          .catch((error: AxiosError) => reject(error))
          .finally(() => commit(SET_FETCH_LIST, false));
      });
    },
    setSearchByTitle({ commit }, title: string): void {
      commit(SET_SEARCH_BY_TITLE, title);
    },
    setCanShowAmount({ commit }, canShow: boolean): void {
      commit(SET_CAN_SHOW_AMOUNT, canShow);
    },
  },
};
