<template>
  <b-container>
    <b-row class="select-form-container">
      <!-- BRAND SELECT -->
      <b-col class="custom-select-container">
        <label for="brand">Brand:</label>
        <b-form-select
          v-model="selectedBrand"
          :options="Object.keys(selectOptions)"
          @change="handleBrandChange"
          id="brand"
        ></b-form-select>
      </b-col>
      <!-- CAMPAIGN SELECT -->
      <b-col class="custom-select-container">
        <label for="campaign">Campaign:</label>
        <b-form-select
          v-model="selectedCampaign"
          :options="selectOptions[selectedBrand]"
          id="campaign"
        ></b-form-select>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { store, mutations } from "@/store";
import axios from "axios";
export default {
  data: function () {
    return {
      selectedBrand: store.selectedBrand,
      selectedCampaign: store.selectedCampaign,
    };
  },
  computed: {
    selectOptions() {
      return store.selectOptions;
    },
  },
  methods: {
    // Transform data into a hashmap of brand => campaigns and insert to store
    transformData() {
      const transformedData = {};
      store.data.campaignStatus.brand.forEach((brand, index) => {
        if (!transformedData[brand]) {
          transformedData[brand] = [];
        }
        transformedData[brand].push(store.data.campaignStatus.campaign[index]);
      });
      mutations.setSelectOptions(transformedData);
    },
    handleBrandChange() {
      this.selectedCampaign = this.selectOptions[this.selectedBrand][0];
    },
  },
  // Fetch data on load
  async created() {
    try {
      const response = await axios.get(
        "https://ni3mpgik72.execute-api.eu-central-1.amazonaws.com/dev/frontend"
      );
      mutations.setData(response.data);
    } catch (error) {
      alert("Failed to fetch data from API");
    } finally {
      this.transformData();
      mutations.setIsLoading(false);
    }
  },
  // Update the store on change
  watch: {
    selectedBrand(newVal) {
      mutations.setSelectedBrand(newVal);
    },
    selectedCampaign(newVal) {
      mutations.setSelectedCampaign(newVal);
    },
  },
};
</script>

<style scoped>
.select-form-container {
  justify-content: center;
}

.custom-select-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f475;
  margin: 1rem 1rem;
  min-width: max-content;
  max-width: max-content;
  gap: 1rem;
}

/* b-form-select class */
.custom-select {
  border: none;

  background-color: #f4f4f4;
  color: #333;
  padding: 0.6rem 1rem;
  margin: 0.5rem 1rem;
}

.custom-select:focus {
  outline: none;
}
</style>
