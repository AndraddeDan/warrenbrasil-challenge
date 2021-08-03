<template>
  <section class="FilterByStatus">oi</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "FilterByStatus",
})
export default class FilterByStatus extends Vue {}
</script>

<style scoped lang="less">
.FilterByStatus {
  background: black;
  color: @secondary-text-color;
  height: 50px;
  padding: 10px 30px;
  display: flex;
  align-items: flex-end;

  &__title {
    font-weight: 100;
    margin: 0;
  }
}
</style>
