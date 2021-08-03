export const Transactions = {
  getTransactionList: (): string => `transactions`,
  getTransactionById: (id: string): string => `transactions/${id}`,
};
