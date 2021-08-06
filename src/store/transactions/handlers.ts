import { DateGroup, Transaction } from "@/models";

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

export const matchTransactionByTitle = (
  transaction: Transaction,
  text: string
): boolean =>
  normalizeToMatch(transaction.title).includes(normalizeToMatch(text));
