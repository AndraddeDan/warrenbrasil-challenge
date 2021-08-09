import { TransactionState } from "./types";

export const state: TransactionState = {
  transactionList: [],
  isFetchingList: false,
  hasError: false,
  canShowAmount: true,
  selectedStatus: [],
  searchedTitle: "",
};
