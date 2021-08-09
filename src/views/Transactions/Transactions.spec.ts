import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";

import Header from "@/components/Header/Header.vue";
import FilterByStatus from "@/components/FilterByStatus/FilterByStatus.vue";
import Searcher from "@/components/Searcher/Searcher.vue";
import ToggleViewer from "@/components/ToggleViewer/ToggleViewer.vue";
import TransactionCard from "@/components/TransactionCard/TransactionCard.vue";
import TransactionListHeader from "@/components/TransactionListHeader/TransactionListHeader.vue";
import GroupByDate from "@/components/GroupByDate/GroupByDate.vue";
import TransactionRequestFail from "@/components/TransactionRequestFail/TransactionRequestFail.vue";

import Transactions from "./Transactions.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Transactions.vue", () => {
  const actions = {
    setSearchByTitle: jest.fn(),
    addFilter: jest.fn(),
    deleteFilter: jest.fn(),
    setCanShowAmount: jest.fn(),
  };

  const getters = {
    transactionListGroupedByDate: () => [],
    searchedTitle: () => "",
    selectedStatus: () => [],
    canShowAmount: () => true,
    isFetchingList: () => false,
  };

  const state = {
    transactionList: [],
    isFetchingList: false,
    canShowAmount: true,
    selectedStatus: [],
    searchedTitle: "",
  };

  const store = new Vuex.Store({
    modules: {
      transactions: {
        state,
        getters,
        actions,
        namespaced: true,
      },
    },
  });

  it("test if component is rendered", () => {
    const wrapper = shallowMount(Transactions, {
      store,
      localVue,
      components: {
        Header,
        FilterByStatus,
        Searcher,
        ToggleViewer,
        TransactionListHeader,
        GroupByDate,
        TransactionCard,
        TransactionRequestFail,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("finding child components", () => {
    const wrapper = mount(Transactions, {
      store,
      localVue,
      components: {
        Header,
        FilterByStatus,
        Searcher,
        ToggleViewer,
        TransactionListHeader,
        GroupByDate,
        TransactionCard,
      },
    });

    const header = wrapper.findComponent(Header);
    const filterByStatus = wrapper.findComponent(FilterByStatus);
    const searcher = wrapper.findComponent(Searcher);
    const toggleViewer = wrapper.findComponent(ToggleViewer);
    const transactionListHeader = wrapper.findComponent(TransactionListHeader);
    const groupByDate = wrapper.findComponent(GroupByDate);
    const transactionCard = wrapper.findComponent(TransactionCard);
    const transactionRequestFail = wrapper.findComponent(
      TransactionRequestFail
    );

    expect(header.exists()).toBe(true);
    expect(filterByStatus.exists()).toBe(true);
    expect(searcher.exists()).toBe(true);
    expect(toggleViewer.exists()).toBe(true);
    expect(transactionListHeader.exists()).toBe(true);
    expect(groupByDate.exists()).toBe(false);
    expect(transactionCard.exists()).toBe(false);
    expect(transactionRequestFail.exists()).toBe(false);
  });
});
