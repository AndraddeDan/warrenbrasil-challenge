<template>
  <button class="TransactionCard">+</button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TransactionCard",
})
export default class TransactionCard extends Vue {}
</script>

<style lang="less" scoped>
.ToggleViewer {
  background: @contrast-color;
  color: @secondary-text-color;
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 7vh;
  right: 5vw;
}
</style>
