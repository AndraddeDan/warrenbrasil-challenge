<template>
  <div class="Transactions">
    <Header title="Transações" action="Status">
      <FilterByStatus />
      <template v-slot:action>
        <Searcher placeholder="Busque pelo título" />
      </template>
    </Header>

    <div class="Transactions__content Transactions-List">
      <GroupByDate
        v-for="(group, index) in list"
        :date="group.date"
        :key="`GroupByDate-${index}`"
      >
        card
      </GroupByDate>
    </div>

    <ToggleViewer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "@/components/Header";
import { FilterByStatus } from "@/components/FilterByStatus";
import { Searcher } from "@/components/Searcher";
import { ToggleViewer } from "@/components/ToggleViewer";
import { GroupByDate } from "@/components/GroupByDate";
import { transactionList } from "@/mock/transaction-list";
import { Transaction, DateGroup } from "@/models";

@Component({
  name: "Transactions",
  components: {
    Header,
    FilterByStatus,
    Searcher,
    ToggleViewer,
    GroupByDate,
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
}
</script>

<style lang="less" scoped>
.Transactions {
  &-List {
    padding: 10px;
    .container(20px);
    margin-top: 40px;
  }
}
</style>
