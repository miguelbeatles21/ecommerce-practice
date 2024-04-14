<script setup>
import { ref } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { gabsiStore } from "@/core/store";
import { useRouter } from "vue-router";

const mainStore = gabsiStore();
const router = useRouter();



const formCreateSupplier = ref({
  nickname: "",
  rfc: "",
  address: "",
  cost: "",
});
const saveSupplier =  () => {
  mainStore.showLoading();
  try {
     axios.post(
      "http://localhost:8081/suppliers",
      {
        nickname: formCreateSupplier.value.nickname,
        rfc: formCreateSupplier.value.rfc,
        address: formCreateSupplier.value.address,
        cost: formCreateSupplier.value.cost,
      }
    );
    mainStore.hideLoading();
    router.push({ name: "suppliers" });
  } catch (error) {
    mainStore.hideLoading();
    toast.error("Ocurrio un problema al crear al proveedor");
  }
};
</script>
<template>
  <div class="container">
    <h1>Alta de proveedor</h1>
    <form @submit.prevent="saveSupplier">
      <div class="mb-3">
        <input
          v-model="formCreateSupplier.nickname"
          type="text"
          placeholder="nickname"
          class="form-control"
          id="nickname"
        />
      </div>
      <div class="mb-3">
        <input
          v-model="formCreateSupplier.rfc"
          type="text"
          placeholder="rfc"
          class="form-control"
          id="rfcs"
        />
      </div>
      <div class="mb-3">
        <input
          v-model="formCreateSupplier.address"
          type="text"
          placeholder="dirección"
          class="form-control"
          id="address"
        />
      </div>
      <div class="mb-3">
        <input
          v-model="formCreateSupplier.cost"
          type="text"
          placeholder="cuota"
          class="form-control"
          id="cost"
        />
      </div>
      <div>
        <br />
        <button type="submit" class="btn btn-primary">Crear</button>
      </div>
    </form>
  </div>
</template>
