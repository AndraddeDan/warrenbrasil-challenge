<template>
  <div class="Modal">
    <span
      v-if="closable"
      class="Modal__close"
      title="Fechar"
      @click="handleClose"
      >+</span
    >

    <main class="Modal__body">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "Modal",
})
export default class Modal extends Vue {
  @Prop({}) public closable!: boolean;
  @Prop({ default: false }) public overlayDark!: boolean;

  mounted(): void {
    this.subscribeToEvents();
  }

  beforeDestroy(): void {
    this.unsubscribeOfEvents();
  }

  public handleClose(): void {
    this.$emit("close");
  }

  private handleEscKeyup(event: KeyboardEvent) {
    const isEscapeKey = event.keyCode === 27;
    if (isEscapeKey && this.closable) this.handleClose();
  }

  private subscribeToEvents() {
    document.addEventListener("keyup", this.handleEscKeyup);
  }

  private unsubscribeOfEvents() {
    document.removeEventListener("keyup", this.handleEscKeyup);
  }
}
</script>

<style lang="less" scoped>
.Modal {
  position: relative;
  margin: 13px;
  border-radius: 14px;
  overflow: hidden;

  &__close {
    color: black;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  &__body {
    max-width: 500px;
    max-height: 80vh;
    overflow: auto;
    overscroll-behavior: contain;
  }
}
</style>
