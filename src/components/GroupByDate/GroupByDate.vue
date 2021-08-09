<template>
  <div class="GroupByDate">
    <div
      data-testid="GroupByDate-date"
      class="GroupByDate__date"
      :class="{
        'GroupByDate__date--loading': isFetching,
      }"
    >
      {{ DateUtils.toString(date) }}
    </div>
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
  @Prop({ default: false }) isFetching: boolean;

  public DateUtils = DateUtils;
}
</script>

<style lang="less" scoped>
.GroupByDate {
  width: 100%;

  &__date {
    margin-bottom: 10px;
    transition: all 1s;

    &--loading {
      .line-loading();
      max-width: 100px;
    }
  }

  &__group {
    margin-bottom: 40px;
  }
}
</style>
