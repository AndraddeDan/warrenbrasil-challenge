<template>
  <section class="TimelineStatus">
    <div
      class="TimelineStatus__line"
      :class="`TimelineStatus__line--${modifier}`"
    />
    <div class="TimelineStatus__status">
      <span>Solicitada</span>
      <span>Processando</span>
      <span>Concluída</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ClosedEyeIcon from "@/assets/icons/ClosedEyeIcon.svg";
import OpenedEyeIcon from "@/assets/icons/OpenedEyeIcon.svg";
import { TransactionStatus } from "@/models";

@Component({
  name: "TimelineStatus",
  components: {
    ClosedEyeIcon,
    OpenedEyeIcon,
  },
})
export default class TimelineStatus extends Vue {
  @Prop({}) status: TransactionStatus;
  private toModify = "";

  public get modifier(): string {
    return this.toModify;
  }

  public set modifier(status: string) {
    this.toModify = status;
  }

  mounted(): void {
    this.setStatusTransition();
  }

  private setStatusTransition(): void {
    setTimeout(() => (this.modifier = this.status), 500);
  }
}
</script>

<style lang="less" scoped>
.TimelineStatus {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &__line {
    border-radius: 10px;
    width: 0%;
    height: 10px;
    background: @primary-color;
    margin-bottom: 20px;
    transition: all 1s;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      background-color: @auxiliary-color;
      width: 5px;
      height: 5px;
    }

    &--SOLICITANDO {
      width: 15px;
    }

    &--PROCESSANDO {
      width: 50%;
    }

    &--CONCLUIDA {
      width: 100%;
    }
  }

  &__status {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
