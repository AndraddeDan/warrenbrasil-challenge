<template>
  <div
    v-if="content && component"
    class="Overlay"
    @click.self="closable && close()"
  >
    <component
      :is="content"
      v-if="component"
      :closable="closable"
      @close="close"
    >
      <component :is="component" v-bind="componentProps">
        <slot />
      </component>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VueConstructor } from "vue";

import { EventBus } from "@/utils";
import { OverlayData, ModalTypes, ModalEvents, OverlayContent } from "@/models";
import { Modal } from "./Modal";
import ModalFactory from "./Modal/ModalFactory";
import OverlayFactory from "./OverlayFactory";

type CommonOptions = ModalTypes;

@Component({
  name: "Overlay",
  components: {
    Modal,
  },
})
export default class Overlay<P> extends Vue {
  public component: VueConstructor | null = null;
  public componentProps: P | null = null;
  public closable = true;
  public content: VueConstructor | null = null;

  mounted(): void {
    this.subscribeToEvents();
  }

  beforeDestroy(): void {
    this.unsubscribeEvents();
  }

  private subscribeToEvents() {
    EventBus.$on(ModalEvents.OPEN, this.open);
    EventBus.$on(ModalEvents.CLOSE, this.close);
  }

  private unsubscribeEvents() {
    EventBus.$off(ModalEvents.OPEN, this.open);
    EventBus.$off(ModalEvents.CLOSE, this.close);
  }

  private construct<T extends CommonOptions>(): {
    [index: string]: (component: T) => VueConstructor;
  } {
    const { MODAL } = OverlayContent;
    return {
      [MODAL]: (component: T) => ModalFactory.construct(component),
    };
  }

  public open<T extends CommonOptions>({
    content,
    component,
    closable = true,
    props,
  }: OverlayData<T, P>): void {
    this.closable = closable;
    this.content = OverlayFactory.construct(content);
    this.component = this.construct<T>()[content](component);
    if (props) this.componentProps = props;
  }

  public close(): void {
    this.component = null;
    this.content = null;
    this.componentProps = null;
  }
}
</script>

<style lang="less" scoped>
.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: white;
  z-index: 999;

  ::-webkit-scrollbar {
    width: 5px;

    &-track {
      background-color: transparent;
      padding-right: 5px;

      &-thumb {
        background-color: gray;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
