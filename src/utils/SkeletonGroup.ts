import { DateGroup, Transaction, TransactionStatus } from "@/models";
import { groupTransactionByDate } from "@/utils/TransactionHandlers";

const transaction: Transaction = {
  id: "",
  date: "",
  status: TransactionStatus.created,
  title: "",
  to: "",
  from: "",
  amount: 0,
  description: "",
};

let day = 0;

const list = new Array(10)
  .fill(transaction)
  .map((i, index) => ({ ...i, date: `2020-07-0${index % 3 ? day++ : day}` }));

export const SkeletonGroup = (): DateGroup<Transaction>[] =>
  groupTransactionByDate(list);
