<template>
  <v-col cols="12" xl="3" lg="3" md="3">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto text-center d-flex flex-column align-center justify-center bg-white"
        v-bind="props"
        min-width="200"
        min-height="200"
        :elevation="isHovering ? 12 : 0"
        variant="flat"
        rounded="xl"
        @click="$router.push(`/category/${id}`)"
      >
        <v-icon
          color="light-green-accent-4"
          :icon="icon"
          :style="isHovering ? 'transform: scale(1.5)' : undefined"
          size="85"
        >
        </v-icon>
        <v-card-subtitle class="py-4">
          {{ title }}
        </v-card-subtitle>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "PostCardTitleV2",
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.v-icon{
  transition: transform .5s;
}

</style>
