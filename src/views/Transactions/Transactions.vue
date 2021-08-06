<template>
  <div class="Transactions">
    <Header title="Transações" action="Status">
      <FilterByStatus />
      <template v-slot:action>
        <Searcher placeholder="Busque pelo título" />
      </template>
    </Header>

    <main class="Transactions__content Transactions-List">
      <TransactionListHeader />
      <GroupByDate
        v-for="(group, index) in transactionListGroupByDate"
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
import { Transaction, DateGroup, ModalData, ModalTypes } from "@/models";
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
      transactionListGroupByDate: "transactionListGroupByDate",
    }),
  },
  methods: {
    ...mapActions("transactions", {
      markAsRead: "markAsRead",
    }),
  },
})
export default class Transactions extends Vue {
  public transactionListGroupByDate!: DateGroup<Transaction>[];

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
