<template>
  <button class="ToggleViewer" @click="setCanShowAmount(!canShowAmount)">
    <OpenedEyeIcon v-if="canShowAmount" />
    <ClosedEyeIcon v-else />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import ClosedEyeIcon from "@/assets/icons/ClosedEyeIcon.svg";
import OpenedEyeIcon from "@/assets/icons/OpenedEyeIcon.svg";

@Component({
  name: "ToggleViewer",
  components: {
    ClosedEyeIcon,
    OpenedEyeIcon,
  },
  computed: {
    ...mapGetters("transactions", {
      list: "transactionListGroupedByDate",
      canShowAmount: "canShowAmount",
    }),
  },
  methods: {
    ...mapActions("transactions", {
      setCanShowAmount: "setCanShowAmount",
    }),
  },
})
export default class ToggleViewer extends Vue {
  public canShowAmount!: boolean;
  public setSearchByTitle!: (title: string) => void;
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
