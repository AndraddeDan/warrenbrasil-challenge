<template>
  <header class="Header" :class="{ 'Header--closed': headerClosed }">
    <h1 class="Header__title">
      <WarrenLogo />
      {{ title }}
    </h1>
    <div class="Header__slot Header-Slot">
      <div
        class="Header-Slot__inside Slot-Inside"
        :class="{ 'Slot-Inside--invisible': headerClosed }"
      >
        <slot />
      </div>
      <div class="Header-Slot__actions Slot-Actions">
        <div class="Slot-Actions__content">
          <slot name="action" />
        </div>
        <Btn class="Slot-Actions__button" @click="toggleHeaderClose">
          Status
          <TriangleIcon
            class="Slot-Actions__icon"
            :class="{ 'Slot-Actions__icon--invert': headerClosed }"
          />
        </Btn>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Btn } from "@/components/Btn";
import TriangleIcon from "@/assets/icons/TriangleIcon.svg";
import WarrenLogo from "@/assets/icons/WarrenLogo.svg";

@Component({
  name: "Header",
  components: {
    Btn,
    TriangleIcon,
    WarrenLogo,
  },
})
export default class Header extends Vue {
  @Prop({ required: true }) title: string;
  public headerClosed = true;

  public toggleHeaderClose(): void {
    this.headerClosed = !this.headerClosed;
  }
}
</script>

<style scoped lang="less">
.Header {
  position: relative;
  background: linear-gradient(0, @secondary-color, @primary-color);
  color: @secondary-text-color;
  max-height: 200px;
  padding: 10px 10px 20px 10px;
  transition: all 1s;

  &--closed {
    transition-delay: 0.5s;
    max-height: 50px;
  }

  &__title {
    font-weight: 100;
    margin: 0 0 0 20px;
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 10px;
    }
  }

  &__slot {
    display: flex;
    flex-direction: column;
  }

  &-Slot {
    display: flex;
    justify-content: center;
  }
}

.Slot-Inside {
  transition: all 1s;
  transition-delay: 1s;

  &--invisible {
    transition-delay: 0s;
    opacity: 0;
    visibility: hidden;
  }
}

.Slot-Actions {
  display: flex;
  position: absolute;
  bottom: -16px;
  transform: translate(-50%);
  left: 50%;

  &__content {
    margin-right: 10px;
  }

  &__icon {
    margin-left: 5px;
    transition: all 1s;

    &--invert {
      transform: rotate(60deg);
    }
  }
}
</style>
