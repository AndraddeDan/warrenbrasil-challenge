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
