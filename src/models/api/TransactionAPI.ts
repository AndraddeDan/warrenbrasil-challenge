import { TransactionStatusAPI } from "./TransactionStatusAPI";

export interface TransactionAPI {
  id: string;
  title: string;
  description: string;
  status: TransactionStatusAPI;
  amount: number;
  date: string;
  from: string;
  to: string;
}
