<template>
  <b-container>
    <b-row cols="1" cols-md="2">
      <!-- BAR CHART -->
      <b-col>
        <BarChart />
      </b-col>
      <!-- LINE CHART -->
      <b-col>
        <LineChart />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BarChart from "./subcomponents/BarChart.vue";
import LineChart from "./subcomponents/LineChart.vue";
import { store } from "@/store";
export default {
  name: "CharSection",
  components: {
    BarChart,
    LineChart,
  },
  computed: {
    isLoading() {
      return store.isLoading;
    },
  },
};
</script>
