<script>
import { VegaButton } from "@heartlandone/vega-vue";

export default {
  components: { VegaButton },
  methods: {
    async notify() {
      await window.VegaNotify.open({
        duration: 240000,
        message: `This notification will close after 4 minutes`,
      });
    },
  },
};
</script>

<template>
  <VegaButton @vegaClick="notify">Click here!</VegaButton>
</template>
