<template>
  <div id="app">
    <PageHeader />
    <ChartSection v-if="!isLoading" />
    <StatusTable v-if="!isLoading" />
  </div>
</template>

<script>
import StatusTable from "./components/StatusTable.vue";
import ChartSection from "./components/ChartSection/ChartSection.vue";
import PageHeader from "./components/PageHeader/PageHeader.vue";
import { store } from "./store";
export default {
  name: "App",
  components: {
    StatusTable,
    ChartSection,
    PageHeader,
  },
  computed: {
    isLoading() {
      return store.isLoading;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
