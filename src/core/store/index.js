import { defineStore } from "pinia";

export const gabsiStore = defineStore("counter", {
  state: () => ({ isEnabledHeader: false, isLoading: false }),
  getters: {
    isEnableHeader: (state) => state.isEnabledHeader,
  },
  actions: {
    changeIsEnabledHeader(value) {
      this.isEnabledHeader = value;
    },
    hideLoading() {this.isLoading = false},
    showLoading() {this.isLoading = true},
  },
});
