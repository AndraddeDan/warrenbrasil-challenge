import { DateGroup, Transaction, TransactionStatus } from "@/models";

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

export const normalizeToMatch = (str: string): string =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

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
): boolean =>
  normalizeToMatch(transaction.title).includes(normalizeToMatch(title));
