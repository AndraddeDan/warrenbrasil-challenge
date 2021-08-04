<template>
  <button class="Btn" v-on="$listeners" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Btn",
})
export default class Btn extends Vue {
  @Prop({}) public text!: string;
  @Prop({ default: false }) disabled: boolean;
}
</script>

<style scoped lang="less">
.Btn {
  padding: 5px 10px;
  min-height: 35px;
  cursor: pointer;
  border: none;
  background: @primary-text-color;
  color: @secondary-text-color;
  text-transform: lowercase;
  box-shadow: 2px 2px 2px @shadow-color;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: @font-family;
}
</style>
