<template>
  <header class="Header" :class="{ 'Header--closed': headerClosed }">
    <h1 class="Header__title">
      <WarrenLogo />
      {{ title }}
    </h1>
    <div class="Header__slot Header-Slot">
      <div
        class="Header-Slot__content"
        :class="{ 'Header-Slot__content--invisible': headerClosed }"
      >
        <slot />
      </div>

      <Btn class="Header-Slot__button" @click="toggleHeaderClose">
        <FilterIcon />
      </Btn>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Btn } from "@/components/Btn";
import FilterIcon from "@/assets/icons/FilterIcon.svg";
import WarrenLogo from "@/assets/icons/WarrenLogo.svg";

@Component({
  name: "Header",
  components: {
    Btn,
    FilterIcon,
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
  padding: 10px 30px;
  transition: all 1s;

  &--closed {
    transition-delay: 0.5s;
    max-height: 50px;
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

    &__content {
      transition: all 1s;
      transition-delay: 1s;

      &--invisible {
        transition-delay: 0s;
        opacity: 0;
        visibility: hidden;
      }
    }

    &__button {
      position: absolute;
      bottom: -12.5px;
    }
  }
}
</style>
