<template>
  <v-col cols="12" xl="3" lg="3" md="3">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class=""
        v-bind="props"
        min-width="200"
        min-height="200"
        :elevation="isHovering ? 12 : 0"
        variant="flat"
        rounded="xl"
        @click="this.$router.push(`/service/${id}`)"
      >
      <v-img
      aspect-ratio="16/9"
      :src="image"
      cover
      height="200"
      :style="isHovering ? 'transform: scale(1.5)' : undefined"
      >
      </v-img>      
        <v-card-subtitle class="py-4">
          {{ title }}
        </v-card-subtitle>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "service-card",
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
      default: "",
    },
    image: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
