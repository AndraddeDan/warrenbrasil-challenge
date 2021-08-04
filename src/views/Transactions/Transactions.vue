<template>
  <div class="Transactions">
    <Header title="Transações">
      <FilterByStatus />
      <template v-slot:action>
        <Searcher placeholder="Busque pelo título" />
      </template>
    </Header>
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
