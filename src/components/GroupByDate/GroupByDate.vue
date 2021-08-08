<template>
  <div class="GroupByDate">
    <div class="GroupByDate__date">{{ DateUtils.toString(date) }}</div>
    <div class="GroupByDate__group" data-testid="GroupByDate-slot">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DateUtils } from "@/utils";

@Component({
  name: "GroupByDate",
})
export default class GroupByDate extends Vue {
  @Prop({ required: true }) date: Date;

  public DateUtils = DateUtils;
}
</script>

<style lang="less" scoped>
.GroupByDate {
  width: 100%;

  &__date {
    margin-bottom: 10px;
  }

  &__group {
    margin-bottom: 40px;
  }
}
</style>
