import { DateGroup, Transaction, TransactionStatus } from "@/models";

export interface TransactionState {
  transactionList: Transaction[];
  transactionListGroupedByDate: DateGroup<Transaction>[];
  isFetchingList: boolean;
  isFetchingById: boolean;
  canShowAmount: boolean;
  selectedStatus: TransactionStatus[];
  searchedTitle: string;
}
