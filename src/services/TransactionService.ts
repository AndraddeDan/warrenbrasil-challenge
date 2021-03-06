import { Transaction, TransactionStatus } from "@/models";
import { TransactionAPI } from "@/models/api/TransactionAPI";
import { ApiUrls, buildApiUrl } from "@/utils/endpoints";
import { AxiosError, AxiosResponse } from "axios";
import { ApiService } from "./ApiService";

const httpClient = ApiService;

const transform = (transaction: TransactionAPI) => ({
  ...transaction,
  status: TransactionStatus[transaction.status],
});

export const TransactionService = {
  getTransactionList(): Promise<Transaction[]> {
    return new Promise((resolve, reject) => {
      const url = buildApiUrl(ApiUrls.getTransactionList());

      httpClient
        .get(url)
        .then((response: AxiosResponse<TransactionAPI[]>) =>
          resolve(response.data.map((transaction) => transform(transaction)))
        )
        .catch((err: AxiosError) => reject(err));
    });
  },

  getTransactionById(id: number): Promise<Transaction> {
    return new Promise((resolve, reject) => {
      const url = buildApiUrl(ApiUrls.getTransactionById(id));

      httpClient
        .get(url)
        .then((response: AxiosResponse<TransactionAPI>) =>
          resolve(transform(response.data))
        )
        .catch((err: AxiosError) => reject(err));
    });
  },
};
