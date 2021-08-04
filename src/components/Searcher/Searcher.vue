<template>
  <form class="Searcher">
    <label for="searchBy">
      <SearchIcon />
    </label>
    <input
      id="searchBy"
      class="Searcher__input"
      type="text"
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
  @Prop({}) placeholder: string;
}
</script>

<style lang="less" scoped>
.Searcher {
  height: 35px;
  border-radius: 10px;
  width: 40vw;
  min-width: 200px;
  box-shadow: 2px 2px 2px @shadow-color;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background: @auxiliary-color;

  svg {
    margin-right: 5px;
    cursor: pointer;
  }

  &__input {
    width: calc(100% - 35px);
    background: transparent;
    border: none;
    border-radius: 10px;
  }
}
</style>
