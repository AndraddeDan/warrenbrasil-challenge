<template>
  <div class="TransactionCard" v-on="$listeners">
    <div class="TransactionCard__title">{{ transaction.title }}</div>
    <div class="TransactionCard__description">
      {{ transaction.description }}
    </div>
    <div class="TransactionCard__status">{{ transaction.status }}</div>
    <div class="TransactionCard__amount">R$ {{ transaction.amount }}</div>
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
  .sm({
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "title title amount"
      "status status status"
      "description description description"
      ;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 20px;
    padding: 15px;
  });

  &:hover {
    background: @auxiliary-color
      radial-gradient(circle, transparent 1%, @auxiliary-color 1%) center/15000%;
  }

  &:active {
    background-color: fade(@shadow-color, 5%);
    background-size: 100%;
    transition: background 0s;
  }

  &__title {
    .sm({ grid-area: title; });
  }

  &__description {
    .sm({ grid-area: description; });
  }

  &__status {
    .sm({ grid-area: status; });
  }

  &__amount {
    .sm({ grid-area: amount; });
  }
}
</style>
