import { Transaction } from "@/models";

export interface TransactionState {
  transactionList: Transaction[] | null;
  isFetchingList: boolean;
  isFetchingById: boolean;
  canShowAmount: boolean;
}
