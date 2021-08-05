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
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: rotate(45deg) scale(2);
    transition: all 1s;
    border-radius: 50%;
    top: 20px;
    right: 25px;
    cursor: pointer;

    &:hover {
      background: @shadow-color;
    }
  }

  &__body {
    max-width: @modal-max-width;
    max-height: 80vh;
    overflow: auto;
    overscroll-behavior: contain;
  }
}
</style>
