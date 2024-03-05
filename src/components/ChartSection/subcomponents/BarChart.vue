<template>
  <ApexChart type="bar" :options="chartOptions" :series="series"></ApexChart>
</template>

<script>
import { store } from "@/store";
import { divideData, formatDate } from "@/utils";

export default {
  name: "BarChart",

  data: function () {
    return {
      chartOptions: {
        xaxis: {
          categories: [],
        },
        colors: [
          function ({ dataPointIndex, w }) {
            const currentValue = w.globals.series[0][dataPointIndex];

            const previousValue =
              dataPointIndex > 0 ? w.globals.series[0][dataPointIndex - 1] : 0;

            if (currentValue < previousValue) {
              return "#FF0000";
            } else {
              return "#02DFDE";
            }
          },
        ],
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
