<template>
  <b-container>
    <b-row>
      <b-col>
        <BrandInfo />
      </b-col>
      <b-col>
        <SelectForm />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BrandInfo from "./subcomponents/BrandInfo.vue";
import SelectForm from "./subcomponents/SelectForm.vue";

export default {
  components: {
    BrandInfo,
    SelectForm,
  },
};
</script>
