<template>
  <div class="Transactions">
    <Header title="Transações" action="Status">
      <FilterByStatus />
      <template v-slot:action>
        <Searcher placeholder="Busque pelo título" />
      </template>
    </Header>

    <main class="Transactions__content Transactions-List">
      <div class="Transactions-List__header">
        <span>Título</span>
        <span>Descrição</span>
        <span>Status</span>
        <span>Valor</span>
      </div>
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
          @click="openModal"
        />
      </GroupByDate>
    </main>

    <ToggleViewer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "@/components/Header";
import { FilterByStatus } from "@/components/FilterByStatus";
import { Searcher } from "@/components/Searcher";
import { ToggleViewer } from "@/components/ToggleViewer";
import { TransactionCard } from "@/components/TransactionCard";
import { GroupByDate } from "@/components/GroupByDate";
import { Transaction, DateGroup, ModalData, ModalTypes } from "@/models";
import { transactionList } from "@/mock/transaction-list";
import { ModalService } from "@/services";

@Component({
  name: "Transactions",
  components: {
    Header,
    FilterByStatus,
    Searcher,
    ToggleViewer,
    GroupByDate,
    TransactionCard,
  },
})
export default class Transactions extends Vue {
  private groupTransactionByDate(list: Transaction[]) {
    return list.reduce((groupList: DateGroup<Transaction>[], transaction) => {
      const group = groupList.find((v) => v.date === transaction.date);

      const { date } = transaction;
      const list = [transaction];

      group ? group.list.push(transaction) : groupList.push({ date, list });

      return groupList;
    }, []);
  }

  public get list(): DateGroup<Transaction>[] {
    return this.groupTransactionByDate(transactionList);
  }

  public openModal(): void {
    const modalData: ModalData = {
      closable: true,
      component: ModalTypes.TRANSACTION_RESUME,
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

    &__header {
      .transaction-grid();
      box-sizing: border-box;
      text-transform: uppercase;
      justify-content: space-around;
      width: 100%;
      border-bottom: 1px solid @contrast-color;
      margin-bottom: 20px;
      .sm({
        display: none;
      });
    }

    &__card {
      margin: 25px 0;
    }
  }
}
</style>
