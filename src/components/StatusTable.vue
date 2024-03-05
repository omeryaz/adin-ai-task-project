<template>
  <div>
    <b-table :items="getTableData" :fields="tableFields" striped hover>
      <template v-slot:cell(status)="data">
        <span class="status" v-html="renderStatus(data.item.status)"></span>
      </template>
      <template v-slot:cell(media)="data">
        <span
          v-html="renderCellWithTrend(data.item.media, data.item.mediaTrend)"
        ></span>
      </template>
      <template v-slot:cell(creative)="data">
        <span
          v-html="
            renderCellWithTrend(data.item.creative, data.item.creativeTrend)
          "
        ></span>
      </template>
      <template v-slot:cell(effectiveness)="data">
        <span
          v-html="
            renderCellWithTrend(
              data.item.effectiveness,
              data.item.effectivenessTrend
            )
          "
        ></span>
      </template>
    </b-table>
  </div>
</template>

<script>
import { store } from "@/store";
import "bootstrap-icons/font/bootstrap-icons.css";
export default {
  computed: {
    getTableData() {
      // Retrieve campaign status data from the store
      const campaignStatus = store.data.campaignStatus;

      // Map the data for the table structure
      return campaignStatus.status.map((status, index) => ({
        status,
        start_date: campaignStatus.start_date[index],
        end_date: campaignStatus.end_date[index],
        campaign: campaignStatus.campaign[index],
        brand: campaignStatus.brand[index],
        effectiveness: campaignStatus.effectiveness[index],
        effectivenessTrend: campaignStatus.effectivenessTrend[index],
        media: campaignStatus.media[index],
        mediaTrend: campaignStatus.mediaTrend[index],
        creative: campaignStatus.creative[index],
        creativeTrend: campaignStatus.creativeTrend[index],
      }));
    },
    tableFields() {
      return [
        { key: "status", label: "Status" },
        { key: "start_date", label: "Start Date" },
        { key: "end_date", label: "End Date" },
        { key: "campaign", label: "Campaign" },
        { key: "brand", label: "Brand" },
        { key: "effectiveness", label: "Effectiveness" },
        { key: "media", label: "Media" },
        { key: "creative", label: "Creative" },
      ];
    },
  },
  methods: {
    renderCellWithTrend(value, trend) {
      if (trend === 1) {
        return `${value} <i class="bi bi-arrow-up-right text-success"></i>`;
      } else if (trend === -1) {
        return `${value} <i class="bi bi-arrow-down-right text-danger"></i>`;
      } else {
        return `${value} <i class="bi bi-dash text-primary"></i>`;
      }
    },
    renderStatus(status) {
      if (status === 1) {
        return `Applied <i class="bi bi-circle-fill text-success"></i>`;
      } else if (status === -1) {
        return `Rejected <i class="bi bi-circle-fill text-danger"></i>`;
      } else {
        return `Pending <i class="bi bi-circle-fill text-warning"></i>`;
      }
    },
  },
};
</script>

<style scoped></style>
