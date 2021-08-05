<template>
  <header class="wrapper">
    <div class="Header" :class="{ 'Header--closed': headerClosed }">
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
        <div
          class="Header-Slot__actions Slot-Actions"
          :class="{ 'Slot-Actions--closed': headerClosed }"
        >
          <div class="Slot-Actions__content">
            <slot name="action" />
          </div>
          <button class="Slot-Actions__button" @click="toggleHeaderClose">
            {{ action }}
            <TriangleIcon
              class="Slot-Actions__icon"
              :class="{ 'Slot-Actions__icon--invert': headerClosed }"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TriangleIcon from "@/assets/icons/TriangleIcon.svg";
import WarrenLogo from "@/assets/icons/WarrenLogo.svg";

@Component({
  name: "Header",
  components: {
    TriangleIcon,
    WarrenLogo,
  },
})
export default class Header extends Vue {
  @Prop({ required: true }) title: string;
  @Prop({ required: true }) action: string;
  public headerClosed = true;

  public toggleHeaderClose(): void {
    this.headerClosed = !this.headerClosed;
  }
}
</script>

<style scoped lang="less">
.wrapper {
  background: linear-gradient(0, @secondary-color, @primary-color);
  border-radius: 0 0 50px 50px;
}

.Header {
  position: relative;
  background: linear-gradient(0, @secondary-color, @primary-color);
  color: @secondary-text-color;
  max-height: 200px;
  padding: 15px;
  transition: all 1s;
  .container();

  &--closed {
    transition-delay: 0.5s;
    max-height: 60px;
  }

  &__title {
    font-weight: 100;
    margin: 0;
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
  bottom: -46px;
  width: 100%;
  right: 0;
  box-sizing: border-box;
  padding: 20px;
  .xs({
    transform: translate(-50%);
    left: 50%;
  });

  &__content {
    padding-right: 10px;
    width: 100%;
  }

  &__button {
    .btn();
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
