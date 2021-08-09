<template>
  <div class="TransactionCard" v-on="$listeners">
    <div
      data-testid="TransactionCard-title"
      class="TransactionCard__title"
      :class="{
        'TransactionCard__title--loading': isFetching,
      }"
    >
      {{ transaction.title }}
    </div>
    <div
      data-testid="TransactionCard-description"
      class="TransactionCard__description"
      :class="{
        'TransactionCard__description--loading': isFetching,
      }"
    >
      {{ transaction.description }}
    </div>
    <div
      class="TransactionCard__status"
      data-testid="TransactionCard-status"
      :class="{
        'TransactionCard__status--loading': isFetching,
      }"
    >
      {{ transaction.status }}
    </div>
    <div
      class="TransactionCard__amount"
      data-testid="TransactionCard-amount"
      :class="{
        'TransactionCard__amount--hide': !canShowAmount,
        'TransactionCard__amount--loading': isFetching,
      }"
    >
      R$ {{ transaction.amount }}
    </div>
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
  @Prop({ required: true }) canShowAmount: boolean;
  @Prop({ default: false }) isFetching: boolean;
}
</script>

<style lang="less" scoped>
.TransactionCard {
  background: @card-color;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  width: 100%;
  .transaction-grid();
  .ripple(@card-color);
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

  &__title {
    transition: all 1s;
    .sm({ grid-area: title; });
    &--loading {
      .line-loading();
    }
  }

  &__description {
    transition: all 1s;
    .sm({ grid-area: description; });
    &--loading {
      .line-loading();
    }
  }

  &__status {
    transition: all 1s;
    .sm({ grid-area: status; });
    &--loading {
      .line-loading();
    }
  }

  &__amount {
    transition: all 1s;
    max-height: 18px;
    border-radius: 10px;
    .sm({ grid-area: amount; });

    &--hide {
      background: @shadow-color;
      color: transparent;
    }

    &--loading {
      .line-loading();
    }
  }
}
</style>
