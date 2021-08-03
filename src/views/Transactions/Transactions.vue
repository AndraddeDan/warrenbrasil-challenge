<template>
  <div class="Transactions">
    <Header title="Transações">
      <FilterByStatus />
    </Header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "@/components/Header";
import { FilterByStatus } from "@/components/FilterByStatus";

@Component({
  name: "Transactions",
  components: {
    Header,
    FilterByStatus,
  },
})
export default class Transactions extends Vue {
  public logo = require("@/assets/logo.png");
}
</script>
