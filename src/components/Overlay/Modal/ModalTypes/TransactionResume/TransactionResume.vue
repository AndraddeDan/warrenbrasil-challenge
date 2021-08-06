<template>
  <div class="TransacionResume">
    <div class="TransacionResume__header">
      <h1>{{ transaction.title }}</h1>
    </div>
    <div class="TransacionResume__body TransacionResume-Body">
      <div class="TransacionResume-Body__timeline">
        <TimelineStatus :status="transaction.status" />
      </div>
      <div class="TransacionResume-Body__details">
        <div class="TransacionResume-Body__details-from Details-From">
          <h2>Transferindo de</h2>
          <hr />
          <div class="Details-From__line">
            <span> {{ transaction.from }} </span>
            <span> {{ transaction.amount }} </span>
          </div>
        </div>
        <div class="TransacionResume-Body__details-to Details-To">
          <h2>Para</h2>
          <hr />
          <div class="Details-To__line">
            <span> {{ transaction.to }} </span>
            <span> {{ transaction.amount }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Transaction } from "@/models";
import { Component, Prop, Vue } from "vue-property-decorator";
import { TimelineStatus } from "@/components/TimelineStatus";

@Component({
  name: "TransacionResume",
  components: {
    TimelineStatus,
  },
})
export default class TransacionResume extends Vue {
  @Prop({ required: true }) public transaction: Transaction;
}
</script>

<style lang="less" scoped>
@header-size: 80px;

.TransacionResume {
  width: 70vw;
  max-width: @modal-max-width;
  height: 500px;
  background: @auxiliary-color;
  .sm({ width: 80vw });

  &__header {
    width: 100%;
    height: @header-size;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      margin: 30px 0 0;
      font-weight: 100;
    }
  }
}

.TransacionResume-Body {
  height: calc(100% - @header-size);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__timeline {
    margin-bottom: 40px;
  }

  &__details,
  &__timeline {
    width: 80%;
  }
}

.Details-From,
.Details-To {
  &__line {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
