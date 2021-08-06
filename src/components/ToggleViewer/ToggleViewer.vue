<template>
  <button class="ToggleViewer" @click="output(!canShow)">
    <OpenedEyeIcon v-if="canShow" />
    <ClosedEyeIcon v-else />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ClosedEyeIcon from "@/assets/icons/ClosedEyeIcon.svg";
import OpenedEyeIcon from "@/assets/icons/OpenedEyeIcon.svg";

@Component({
  name: "ToggleViewer",
  components: {
    ClosedEyeIcon,
    OpenedEyeIcon,
  },
})
export default class ToggleViewer extends Vue {
  @Prop({}) canShow!: boolean;

  public output(can: boolean): void {
    this.$emit("change", can);
  }
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
