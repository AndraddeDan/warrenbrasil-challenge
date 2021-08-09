import { TransactionState } from "./types";

export const state: TransactionState = {
  transactionList: [],
  isFetchingList: false,
  canShowAmount: true,
  selectedStatus: [],
  searchedTitle: "",
};
