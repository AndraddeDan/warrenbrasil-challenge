<template>
  <section class="FilterByStatus">
    <Btn> Todos </Btn>
    <Btn
      v-for="(index, status) in Object.keys(TransactionStatus)"
      :key="status"
    >
      {{ TransactionStatus[index] }}
    </Btn>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Btn } from "@/components/Btn";
import { TransactionStatus } from "@/models";

@Component({
  name: "FilterByStatus",
  components: {
    Btn,
  },
})
export default class FilterByStatus extends Vue {
  public TransactionStatus = TransactionStatus;
}
</script>

<style scoped lang="less">
.FilterByStatus {
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  .sm({
    height: 90px;
    margin: 15px;
  });

  button {
    margin: 5px;
  }
}
</style>
