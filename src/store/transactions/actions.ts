import { Transaction, TransactionStatus } from "@/models";
import { TransactionService } from "@/services";
import { AxiosError } from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../root-state";
import { TransactionCommits, TransactionState } from "./types";

const {
  ADD_FILTER,
  DELETE_FILTER,
  SET_CAN_SHOW_AMOUNT,
  SET_FETCH_LIST,
  SET_LIST,
  SET_SEARCH_BY_TITLE,
} = TransactionCommits;

export const actions: ActionTree<TransactionState, RootState> = {
  transactionList({ commit }): Promise<Transaction[]> {
    commit(SET_FETCH_LIST, true);
    return new Promise((resolve, reject) => {
      TransactionService.getTransactionList()
        .then((transactionList: Transaction[]) => {
          commit(SET_LIST, transactionList);
          resolve(transactionList);
        })
        .catch((error: AxiosError) => reject(error))
        .finally(() => commit(SET_FETCH_LIST, false));
    });
  },
  setSearchByTitle({ commit }, title: string): void {
    commit(SET_SEARCH_BY_TITLE, title);
  },
  addFilter({ commit }, status: TransactionStatus[]): void {
    commit(ADD_FILTER, status);
  },
  deleteFilter({ commit }, status: TransactionStatus[]): void {
    commit(DELETE_FILTER, status);
  },
  setCanShowAmount({ commit }, canShow: boolean): void {
    commit(SET_CAN_SHOW_AMOUNT, canShow);
  },
};
