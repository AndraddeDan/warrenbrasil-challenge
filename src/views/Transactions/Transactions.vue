<template>
  <div class="Transactions">
    <Header title="Transações" action="Status">
      <FilterByStatus />
      <template v-slot:action>
        <Searcher placeholder="Busque pelo título" />
      </template>
    </Header>

    <div class="Transactions__content Transactions-List">Card Here</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "@/components/Header";
import { FilterByStatus } from "@/components/FilterByStatus";
import { Searcher } from "@/components/Searcher";

@Component({
  name: "Transactions",
  components: {
    Header,
    FilterByStatus,
    Searcher,
  },
})
export default class Transactions extends Vue {
  public logo = require("@/assets/logo.png");
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
