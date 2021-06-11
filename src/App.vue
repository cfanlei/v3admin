<template>
  <div class="w-screen">
    <router-view></router-view>
    <div class="h-screen w-screen bg-blue-300 flex flex-row">
      <div class="w-1/5 h-full">
        <router-view
          class="w-full h-full bg-pink-100"
          name="left"
        ></router-view>
      </div>
      <div class="w-4/5 h-full">
        <router-view
          class="w-full bg-yellow-100 h-20"
          name="main"
        ></router-view>
        <router-view name="top"></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const App = defineComponent({
  created() {
    alert(window.screen.width);
  },
});
export default App;
</script>

<style scoped lang="scss"></style>
