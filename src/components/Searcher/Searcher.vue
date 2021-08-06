<template>
  <form class="Searcher">
    <label for="searchBy">
      <SearchIcon />
    </label>
    <input
      id="searchBy"
      class="Searcher__input"
      type="text"
      ref="searchInput"
      :value="value"
      @input="output"
      :placeholder="placeholder"
    />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Header } from "@/components/Header";
import { FilterByStatus } from "@/components/FilterByStatus";
import SearchIcon from "@/assets/icons/SearchIcon.svg";

@Component({
  name: "Searcher",
  components: {
    Header,
    FilterByStatus,
    SearchIcon,
  },
})
export default class Searcher extends Vue {
  $refs!: {
    searchInput: HTMLInputElement;
  };

  @Prop({}) placeholder: string;
  @Prop({}) value!: string;

  public output(): void {
    this.$emit("input", this.$refs.searchInput.value);
  }
}
</script>

<style lang="less" scoped>
.Searcher {
  height: 40px;
  border-radius: 10px;
  min-width: 200px;
  box-shadow: 2px 2px 2px @shadow-color;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background: @auxiliary-color;

  label {
    display: flex;
  }

  svg {
    margin-right: 5px;
    cursor: pointer;
  }

  &__input {
    width: calc(100% - 35px);
    height: 100%;
    outline: none;
    background: transparent;
    border: none;
    border-radius: 10px;
  }
}
</style>
