export const Transactions = {
  getTransactionList: (): string => `transactions`,
  getTransactionById: (id: number): string => `transactions/${id}`,
};
