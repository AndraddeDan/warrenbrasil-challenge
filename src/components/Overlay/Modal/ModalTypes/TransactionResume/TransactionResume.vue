<template>
  <div class="TransacionResume">
    <span class="TransacionResume__resume"> resumo </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "TransacionResume",
})
export default class TransacionResume extends Vue {
  @Prop({}) public phrase: string;
}
</script>

<style lang="less" scoped>
.TransacionResume {
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
}
</style>
