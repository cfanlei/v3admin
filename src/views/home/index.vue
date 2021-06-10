<template>
  <div>
    <router-view name="left-nav"></router-view>
    <router-view name="main"></router-view>
    <router-view name="topBar"></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const home = defineComponent({});
export default home;
</script>
