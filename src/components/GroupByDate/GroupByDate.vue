<template>
  <button class="GroupByDate">+</button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "GroupByDate",
})
export default class GroupByDate extends Vue {}
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
