import { Transaction, TransactionStatus } from "@/models";
import { MutationTree } from "vuex";
import { TransactionCommits, TransactionState } from "./types";

const {
  ADD_FILTER,
  DELETE_FILTER,
  SET_CAN_SHOW_AMOUNT,
  SET_FETCH_LIST,
  SET_LIST,
  SET_SEARCH_BY_TITLE,
} = TransactionCommits;

export const mutations: MutationTree<TransactionState> = {
  [SET_LIST](state: TransactionState, list: Transaction[]): void {
    state.transactionList = list;
  },
  [SET_FETCH_LIST](state: TransactionState, isFetchingList: boolean): void {
    state.isFetchingList = isFetchingList;
  },
  [SET_SEARCH_BY_TITLE](state: TransactionState, searchedTitle: string): void {
    state.searchedTitle = searchedTitle;
  },
  [ADD_FILTER](state: TransactionState, status: TransactionStatus[]): void {
    state.selectedStatus = state.selectedStatus.concat(status);
  },
  [DELETE_FILTER](state: TransactionState, status: TransactionStatus[]): void {
    state.selectedStatus = state.selectedStatus.filter(
      (s) => !status.includes(s)
    );
  },
  [SET_CAN_SHOW_AMOUNT](state: TransactionState, canShow: boolean): void {
    state.canShowAmount = canShow;
  },
};
