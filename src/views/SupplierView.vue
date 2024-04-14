<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { gabsiStore } from "../core/store/index";

const mainStore = gabsiStore();
onMounted(() => {
  getSuppliers();
});

const dataSuppliers = ref({});

const getSuppliers = async () => {
  mainStore.showLoading();
  try {
    let result = await axios.get(
      "http://localhost:8081/suppliers" 
    );
    dataSuppliers.value = result.data;
    mainStore.hideLoading();
  } catch (error) {
    mainStore.hideLoading();
    toast.error("Hubo un problema al consultar proveedores");
  }
};

const deleteSupplier = async(nickname) => {
  mainStore.showLoading();
  try {
    await axios.delete(
      "http://localhost:8081/suppliers/" + nickname 
    );
    getSuppliers();
    mainStore.hideLoading();
  } catch (error) {
    mainStore.hideLoading();
    toast.error("Hubo un problema al eliminar proveedores");
  }
}

</script>
<template>
  <div class="container">
    <h1>Administración de de proveedores</h1>
    <br />
    <div class="row">
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="th-sm">nickname</th>
          <th class="th-sm">RFC</th>
          <th class="th-sm">Dirección</th>
          <th class="th-sm">Cuota</th>
          <th class="th-sm">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="supplier in dataSuppliers" :key="supplier.nickname">
          <td>{{ supplier.nickname }}</td>
          <td>{{ supplier.rfc }}</td>
          <td>{{ supplier.address }}</td>
          <td>{{ supplier.cost }}</td>
          <td>
            <div class="d-flex flex-row mb-3">
              
              <div class="col-sm-6 mb-4">
                <button
                  class="btn btn-danger"
                  type="submit"
                  @click="deleteSupplier(supplier.nickname)"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <RouterLink :to="{ name: 'suppliers-register' }"
      ><button class="btn btn-primary" type="button">
        Agregar proveedor
      </button></RouterLink
    >
  </div>
</template>
