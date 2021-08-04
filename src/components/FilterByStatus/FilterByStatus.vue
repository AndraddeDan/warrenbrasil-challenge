<template>
  <section class="FilterByStatus">
    <button class="FilterByStatus__button--active">Todos</button>
    <button
      class="FilterByStatus__button"
      v-for="(index, status) in Object.keys(TransactionStatus)"
      :key="status"
    >
      {{ TransactionStatus[index] }}
    </button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TransactionStatus } from "@/models";

@Component({
  name: "FilterByStatus",
})
export default class FilterByStatus extends Vue {
  public TransactionStatus = TransactionStatus;
}
</script>

<style scoped lang="less">
.FilterByStatus {
  height: 65px;
  padding: 20px 20px 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  .sm({
    padding: 10px 0 0;
    justify-content: center;
    height: 90px;
    margin: 15px;
  });

  &__button {
    .btn-status();

    &--active {
      .btn-status(true);
    }
  }
}
</style>
