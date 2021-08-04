<template>
  <div class="GroupByDate">
    <div>{{ date }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "GroupByDate",
})
export default class GroupByDate extends Vue {
  @Prop({ required: true }) date: Date;
}
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
