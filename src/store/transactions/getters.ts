import { DateGroup, Transaction, TransactionStatus } from "@/models";
import { GetterTree } from "vuex";
import { RootState } from "../root-state";
import {
  groupTransactionByDate,
  matchTransactionByStatus,
  matchTransactionByTitle,
  matchTransactionByTitleAndStatus,
} from "@/utils/TransactionHandlers";
import { TransactionState } from "./types";

export const getters: GetterTree<TransactionState, RootState> = {
  transactionListGroupedByDate: ({
    transactionList,
    searchedTitle: title,
    selectedStatus: status,
  }: TransactionState): DateGroup<Transaction>[] => {
    const canFilterByTitle = Boolean(title.trim().length);
    const canFilterBystatus = Boolean(status.length);

    const list = transactionList.filter((t) => {
      if (canFilterByTitle && canFilterBystatus)
        return matchTransactionByTitleAndStatus(t, status, title);
      if (canFilterByTitle && !canFilterBystatus)
        return matchTransactionByTitle(t, title);
      if (!canFilterByTitle && canFilterBystatus)
        return matchTransactionByStatus(t, status);

      return t;
    });

    return groupTransactionByDate(list);
  },
  transactionList: (state: TransactionState): Transaction[] =>
    state.transactionList,
  searchedTitle: (state: TransactionState): string => state.searchedTitle,
  isFetchingList: (state: TransactionState): boolean => state.isFetchingList,
  canShowAmount: (state: TransactionState): boolean => state.canShowAmount,
  selectedStatus: (state: TransactionState): TransactionStatus[] =>
    state.selectedStatus,
};
