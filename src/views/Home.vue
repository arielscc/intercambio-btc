<template>
  <div>
    <div class="flex justify-center">
      <scale-loader
        :loading="isLoading"
        :color="'#00688B'"
        :radius="5"
        :heigth="50"
        :width="8"
      />
    </div>
    <px-assets-table :assets="assets" v-if="!isLoading" />
  </div>
</template>

<script>
import pxAssetsTable from "@/components/pxAssetsTable";
import api from "@/api";

export default {
  name: "Home",
  components: {
    pxAssetsTable
  },
  data() {
    return {
      isLoading: false,
      assets: []
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  }
};
</script>
