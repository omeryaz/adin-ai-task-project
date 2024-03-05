<template>
  <h3 class="brand">
    {{ selectedBrand }}
    <i class="campaign">{{ selectedCampaign }}</i>
  </h3>
</template>

<script>
import { store } from "@/store";

export default {
  computed: {
    selectedCampaign() {
      return store.selectedCampaign;
    },
    selectedBrand() {
      return store.selectedBrand;
    },
  },
};
</script>

<style scoped>
.brand {
  position: relative;
  width: max-content;
  font-size: 2.5rem;
}

@media (max-width: 767px) {
  .brand {
    margin-bottom: 2rem;
  }
}

.campaign {
  position: absolute;
  bottom: -1.5rem;
  left: 0.5rem;
  font-size: 0.4em;
  width: max-content;
}
</style>
