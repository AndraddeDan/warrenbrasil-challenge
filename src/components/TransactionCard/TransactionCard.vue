<template>
  <div class="TransactionCard">card</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TransactionCard",
})
export default class TransactionCard extends Vue {}
</script>

<style lang="less" scoped>
.TransactionCard {
  background: @auxiliary-color;
  box-shadow: 5px 5px 19px @shadow-color;
  border-radius: 20px;
  border: none;
  width: 100%;
  height: 200px;
}
</style>
