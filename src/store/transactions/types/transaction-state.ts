import { Transaction, TransactionStatus } from "@/models";

export interface TransactionState {
  transactionList: Transaction[];
  isFetchingList: boolean;
  canShowAmount: boolean;
  selectedStatus: TransactionStatus[];
  searchedTitle: string;
}
