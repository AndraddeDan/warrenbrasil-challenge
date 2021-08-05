<template>
  <div>works</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ClosedEyeIcon from "@/assets/icons/ClosedEyeIcon.svg";
import OpenedEyeIcon from "@/assets/icons/OpenedEyeIcon.svg";

@Component({
  name: "TimelineStatus",
  components: {
    ClosedEyeIcon,
    OpenedEyeIcon,
  },
})
export default class TimelineStatus extends Vue {
  public opened = false;
}
</script>

<style lang="less" scoped>
.TimelineStatus {
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
