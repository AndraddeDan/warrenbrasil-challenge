import { Transaction } from "@/models";

export interface TransactionState {
  transactionList: Transaction[];
  isFetchingList: boolean;
  isFetchingById: boolean;
  canShowAmount: boolean;
}
