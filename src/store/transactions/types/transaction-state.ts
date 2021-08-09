import { Transaction, TransactionStatus } from "@/models";

export interface TransactionState {
  transactionList: Transaction[];
  isFetchingList: boolean;
  hasError: boolean;
  canShowAmount: boolean;
  selectedStatus: TransactionStatus[];
  searchedTitle: string;
}
