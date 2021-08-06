<template>
  <div class="Transactions">
    <Header title="Transações" action="Status">
      <FilterByStatus
        :enabledFilters="selectedStatus"
        @disable="deleteFilter"
        @enable="addFilter"
      />
      <template v-slot:action>
        <Searcher v-model="search" placeholder="Busque pelo título" />
      </template>
    </Header>

    <main class="Transactions__content Transactions-List">
      <TransactionListHeader />
      <GroupByDate
        v-for="(group, index) in list"
        :date="group.date"
        :key="`GroupByDate-${index}`"
      >
        <TransactionCard
          class="Transactions-List__card"
          v-for="(transaction, index) in group.list"
          :key="`TransactionCard-${index}`"
          :transaction="transaction"
          @click="openModal(transaction)"
        />
      </GroupByDate>
    </main>

    <ToggleViewer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { Header } from "@/components/Header";
import { FilterByStatus } from "@/components/FilterByStatus";
import { Searcher } from "@/components/Searcher";
import { ToggleViewer } from "@/components/ToggleViewer";
import { TransactionCard } from "@/components/TransactionCard";
import { TransactionListHeader } from "@/components/TransactionListHeader";
import { GroupByDate } from "@/components/GroupByDate";
import {
  Transaction,
  DateGroup,
  ModalData,
  ModalTypes,
  TransactionStatus,
} from "@/models";
import { ModalService } from "@/services";

@Component({
  name: "Transactions",
  components: {
    Header,
    FilterByStatus,
    Searcher,
    ToggleViewer,
    TransactionListHeader,
    GroupByDate,
    TransactionCard,
  },
  computed: {
    ...mapGetters("transactions", {
      list: "transactionListGroupedByDate",
      searchedTitle: "searchedTitle",
      selectedStatus: "selectedStatus",
    }),
  },
  methods: {
    ...mapActions("transactions", {
      setSearchByTitle: "setSearchByTitle",
      addFilter: "addFilter",
      deleteFilter: "deleteFilter",
    }),
  },
})
export default class Transactions extends Vue {
  public setSearchByTitle!: (title: string) => void;
  public setFilter!: (status: TransactionStatus) => void;
  public deleteFilter!: (status: TransactionStatus) => void;

  public list!: DateGroup<Transaction>[];
  public searchedTitle!: string;
  public selectedStatus!: TransactionStatus[];

  get search(): string {
    return this.searchedTitle;
  }

  set search(title: string) {
    this.setSearchByTitle(title);
  }

  public openModal(transaction: Transaction): void {
    const modalData: ModalData<{ transaction: Transaction }> = {
      closable: true,
      component: ModalTypes.TRANSACTION_RESUME,
      props: { transaction },
    };

    ModalService.openModal(modalData);
  }
}
</script>

<style lang="less" scoped>
.Transactions {
  &-List {
    padding: 10px;
    .container(20px);
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__card {
      margin: 25px 0;
    }
  }
}
</style>
