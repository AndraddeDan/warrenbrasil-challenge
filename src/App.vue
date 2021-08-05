<template>
  <div id="app">
    <Overlay />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Overlay } from "@/components/Overlay";

@Component({
  name: "App",
  components: {
    Overlay,
  },
})
export default class App extends Vue {}
</script>
