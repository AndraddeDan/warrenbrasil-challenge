<template>
  <div class="TransactionCard" v-on="$listeners">
    <div>
      {{ transaction.title }}
    </div>
    <div>
      {{ transaction.description }}
    </div>
    <div>
      {{ transaction.status }}
    </div>
    <div>R$ {{ transaction.amount }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Transaction } from "@/models";

@Component({
  name: "TransactionCard",
})
export default class TransactionCard extends Vue {
  @Prop({ required: true }) transaction: Transaction;
}
</script>

<style lang="less" scoped>
.TransactionCard {
  background: @auxiliary-color;
  box-shadow: 7px 7px 15px @shadow-color;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  width: 100%;
  .transaction-grid();
  background-position: center;
  transition: background 1s;

  &:hover {
    background: @auxiliary-color
      radial-gradient(circle, transparent 1%, @auxiliary-color 1%) center/15000%;
  }

  &:active {
    background-color: fade(@shadow-color, 5%);
    background-size: 100%;
    transition: background 0s;
  }
}
</style>
