<template>
  <div>
    <login></login>
  </div>
</template>

<script lang="ts">
import Login from "./views/login/index.vue";
import { defineComponent } from "vue";
const App = defineComponent({
  components: { Login },
});
export default App;
</script>

<style scoped lang="scss"></style>
