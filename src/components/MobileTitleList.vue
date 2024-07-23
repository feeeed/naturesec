<template>
  <v-row class="d-flex flex-column">
    <v-sheet class="d-flex flex-column text-center">
      <p class="text-h5 font-weight-bold my-5">
        Услуги природоохранного назначения
      </p>
      <p class="text-body-1 font-weight-medium text-medium-emphasis mb-5">
        Услуги пользующееся наибольшим спросом среди наших заказчиков.
      </p>
    </v-sheet>
    <MobileCardMax
      v-for="(post, key) in posts"
      :key="key"
      :id="post.id"
      :title="post.title"
      :icon="post.icon"
    />
    <v-col cols="12">
      <v-card
        variant="flat"
        height="60px"
        elevation="1"
        @click="$router.push(`/categories/`)"
        color="light-green-accent-4"
      >
        <div class="d-flex justify-space-between px-5 align-center">
          <div>
            <v-card-title> Больше на отдельной странице </v-card-title>
          </div>
          <div>
            <v-icon color="light-green-accent-4" size="65"> </v-icon>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MobileCardMax from "@/components/MobileCardMax.vue";
export default {
  name: "mobile-title-list",
  components: { MobileCardMax },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
