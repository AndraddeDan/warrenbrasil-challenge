// import { TransactionStatus } from "./transaction-status";

export interface Transaction {
  id: string;
  title: string;
  description: string;
  // status: TransactionStatus;
  amount: number;
  date: string;
  from: string;
  to: string;
}
