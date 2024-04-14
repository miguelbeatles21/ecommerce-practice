<script setup>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { gabsiStore } from "../core/store/index";

const mainStore = gabsiStore();
const router = useRouter();

const version = ref("");
const textShow = ref("");

onMounted(() => {
  mainStore.changeIsEnabledHeader(false);
  getAppData();

});

const goToSuppliers = () => {
  mainStore.changeIsEnabledHeader(true);
  router.push({ name: "suppliers" });
} 
const getAppData = async () => {
  try {
    mainStore.showLoading()
    let resultVersion = await axios.get(
      "http://localhost:8081/gabsi/version"
    );
    version.value = resultVersion.data;

    let resultText = await axios.get(
      "http://localhost:8081/gabsi/text"
    );
    textShow.value = resultText.data;
    mainStore.hideLoading();

  } catch (error) {
    toast.error("Ocurrio un problema al consultar data");
    mainStore.hideLoading();
  }
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col image-logo"></div>
      <div class="col">
        <h2 class="fw-bold text-center py-5">  {{ textShow }}</h2>
        <div class="mb-4">
          <label>{{ version }}</label>
        </div>
        <div class="d-grid">
          <button @click="goToSuppliers" class="btn btn-primary">
            Continuar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.image-logo {
  background-image: url("@/assets/img/miguel.jpg");
  background-position: center center;
}
</style>
