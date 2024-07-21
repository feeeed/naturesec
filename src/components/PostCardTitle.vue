<template>
  <v-col>
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="mx-auto" v-bind="props" max-width="400">
        <v-img :src="imageURL" height="200px" cover></v-img>

        <v-card-title class="text-lg-h6">
          {{ title }}
        </v-card-title>

        <v-card-subtitle class="py-4">
          <span v-html="description"></span>
        </v-card-subtitle>

        <v-overlay
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-center justify-center"
        >
          <v-btn variant="flat" @click="$router.push(`/posts/${id}`)"
            >Подробнее</v-btn
          >
        </v-overlay>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "PostCardTitle",
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    mainContent: {
      type: String,
      default: "",
    },
    imageURL: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
