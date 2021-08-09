<template>
  <section class="TransactionRequestFail">
    <h1>Erro ao carregar as transações</h1>
    <button data-testid="TransactionRequestFail-button" @click="output">
      <RefreshIcon />
      Recarregar
    </button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RefreshIcon from "@/assets/icons/RefreshIcon.svg";

@Component({
  name: "TransactionRequestFail",
  components: {
    RefreshIcon,
  },
})
export default class TransactionRequestFail extends Vue {
  public output(): void {
    this.$emit("change");
  }
}
</script>

<style lang="less" scoped>
.TransactionRequestFail {
  background: @auxiliary-color;
  color: @primary-text-color;
  border-radius: 10px;
  border: none;
  margin-top: 80px;
  width: 100%;
  box-shadow: 2px 2px 25px @shadow-color;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  .sm({
    margin-top: 30px;
  });

  h1 {
    text-align: center;
    margin: 0 0 25px;
    color: @error-color;
    font-weight: 300;
    .sm({
      font-size: 1.5em;
    });
  }

  button {
    .btn();
    .ripple(@contrast-color);
    text-transform: capitalize;
    width: 80%;

    svg {
      margin-right: 10px;
    }
  }
}
</style>
