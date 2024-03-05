import Vue from "vue";

// Create an observable store object
export const store = Vue.observable({
  selectedBrand: "Enigma",
  selectedCampaign: "Crypto Analysis",
  selectOptions: {},
  isLoading: true,
  data: {},
});

// Export mutations to update the store
export const mutations = {
  setSelectOptions(selectOptions) {
    store.selectOptions = selectOptions;
  },
  setSelectedBrand(selectedBrand) {
    store.selectedBrand = selectedBrand;
  },
  setSelectedCampaign(selectedCampaign) {
    store.selectedCampaign = selectedCampaign;
  },
  setIsLoading(loadingState) {
    store.isLoading = loadingState;
  },
  setData(data) {
    store.data = data;
  },
};
