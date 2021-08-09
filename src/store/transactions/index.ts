import { Module } from "vuex";
import { TransactionState } from "./types";
import { RootState } from "../root-state";

import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const transactions: Module<TransactionState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
