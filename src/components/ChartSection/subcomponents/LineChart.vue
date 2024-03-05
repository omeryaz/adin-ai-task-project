<template>
  <ApexChart type="line" :options="chartOptions" :series="series"></ApexChart>
</template>

<script>
import { store } from "@/store";
import { formatDate, divideData } from "@/utils";
export default {
  name: "LineChart",
  data: function () {
    return {
      chartOptions: {
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "Value",
          data: [],
        },
      ],
    };
  },
  computed: {
    selectedCampaign() {
      return store.selectedCampaign;
    },
  },
  methods: {
    updateChart() {
      const newTimeStamps = divideData(
        Object.keys(store.data.scoreTrend[this.selectedCampaign])
      ).map((str) => formatDate(str));

      const newSeriesData = divideData(
        Object.values(store.data.scoreTrend[this.selectedCampaign])
      );

      this.chartOptions = {
        ...this.chartOptions,
        xaxis: {
          ...this.chartOptions.xaxis,
          categories: newTimeStamps,
        },
      };
      this.series = [
        {
          name: this.selectedCampaign,
          data: newSeriesData,
        },
      ];
    },
  },
  watch: {
    selectedCampaign: {
      handler() {
        this.updateChart();
      },
      immediate: true,
    },
  },
};
</script>
