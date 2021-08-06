import { Transaction } from "@/models";

export interface TransactionState {
  transactionList: Transaction[] | null;
}
