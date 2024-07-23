<template>
    <p class="text-body-1 font-weight-medium text-medium-emphasis mb-10">
        Похожее:
      </p>
  <v-row> 
   <service-card
   v-for="(service,key) in servicesEk"
   :key="key"
   :id="service.id"
   :title="service.title"
   :image="service.image"
   />
  </v-row>
</template>

<script>
import ServiceCard from "./layouts/ServiceCard.vue";
export default {
  name: "service-card-list",
  components:{
    ServiceCard,

  },
  props: {
    servicesEk: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
