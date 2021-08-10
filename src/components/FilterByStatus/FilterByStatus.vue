<template>
  <section class="FilterByStatus">
    <button
      data-testid="FilterByStatus-allBtn"
      class="FilterByStatus__button"
      :class="{
        'FilterByStatus__button--active': !enabledFilters.length,
      }"
      @click="output(FilterEvents.DISABLE, Object.values(TransactionStatus))"
    >
      Todos
    </button>
    <button
      :data-testid="`FilterByStatus-allBtn(${index})`"
      class="FilterByStatus__button"
      :class="{
        'FilterByStatus__button--active': enabledFilters.includes(
          TransactionStatus[status]
        ),
      }"
      v-for="(status, index) in Object.keys(TransactionStatus)"
      :key="`FilterByStatus-${index}`"
      @click="
        output(
          enabledFilters.includes(TransactionStatus[status])
            ? FilterEvents.DISABLE
            : FilterEvents.ENABLE,
          [TransactionStatus[status]]
        )
      "
    >
      {{ TransactionStatus[status] }}
    </button>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TransactionStatus, FilterEvents } from "@/models";
import { FilterEventTranslator } from "@/utils";

@Component({
  name: "FilterByStatus",
})
export default class FilterByStatus extends Vue {
  @Prop({ default: () => [] }) enabledFilters: TransactionStatus[];
  public TransactionStatus = TransactionStatus;
  public FilterEvents = FilterEvents;

  public output(filterEvent: FilterEvents, status: TransactionStatus[]): void {
    this.$emit(FilterEventTranslator[filterEvent], status);
  }
}
</script>

<style scoped lang="less">
.FilterByStatus {
  height: 65px;
  padding: 20px 0px 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  .sm({
    padding: 0;
    justify-content: center;
    align-items: center;
    height: 90px;
    margin: 15px;
  });

  &__button {
    .btn-status();

    &--active {
      .btn-status(true);
    }
  }
}
</style>
