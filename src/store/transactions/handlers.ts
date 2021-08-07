import { DateGroup, Transaction, TransactionStatus } from "@/models";
import { normalizeUtils } from "@/utils";

export const groupTransactionByDate = (
  list: Transaction[]
): DateGroup<Transaction>[] => {
  return list.reduce((groupList: DateGroup<Transaction>[], transaction) => {
    const group = groupList.find((v) => v.date === transaction.date);

    const { date } = transaction;
    const list = [transaction];

    group ? group.list.push(transaction) : groupList.push({ date, list });

    return groupList;
  }, []);
};

export const matchTransactionByTitleAndStatus = (
  transaction: Transaction,
  status: TransactionStatus[],
  title: string
): boolean =>
  matchTransactionByStatus(transaction, status) &&
  matchTransactionByTitle(transaction, title);

export const matchTransactionByStatus = (
  transaction: Transaction,
  status: TransactionStatus[]
): boolean => status.includes(transaction.status);

export const matchTransactionByTitle = (
  transaction: Transaction,
  title: string
): boolean => normalizeUtils(transaction.title).includes(normalizeUtils(title));
