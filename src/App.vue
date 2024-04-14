<template>
  <loading :active="mainStore.isLoading" :can-cancel="false" :is-full-page="true" ></loading>
  <header-component v-if="mainStore.isEnableHeader"></header-component>
  <router-view></router-view>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { gabsiStore } from "./core/store/index";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
const router = useRouter();
const mainStore = gabsiStore();
onMounted(() => {
  router.push({ name: "home" });
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
