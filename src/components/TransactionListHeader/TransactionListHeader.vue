<template>
  <div class="TransactionListHeader">
    <span data-testid="title">Título</span>
    <span data-testid="description">Descrição</span>
    <span data-testid="status">Status</span>
    <span data-testid="amount">Valor</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TransactionListHeader",
})
export default class TransactionListHeader extends Vue {}
</script>

<style lang="less" scoped>
.TransactionListHeader {
  .transaction-grid();
  box-sizing: border-box;
  text-transform: uppercase;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid @contrast-color;
  margin-bottom: 20px;
  .sm({ display: none; });
}
</style>
