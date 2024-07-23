<template>
  <div>
    <v-card class="mx-auto my-4" rounded="xl" variant="outlined">
      <div class="d-flex flex-column flex-nowrap justify-space-between">
        <v-img class="mx-2" :src="img" height="200px" width="400px"></v-img>
        <div>
          <v-card-title>
            {{ title }}
          </v-card-title>

          <v-card-actions>
            <v-btn color="green" variant="text" @click="reveal = !reveal">
              Читать отзыв
            </v-btn>
          </v-card-actions>
        </div>
      </div>

      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="v-card--reveal justify-space-between"
          style="height: 100%"
          rounded="xl"
        >
          <v-card-text class="pb-0 my-4">
            <p class="text-h4 text--primary">
              {{ title }}
            </p>
            <p class="my-4">{{ subtitle }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn variant="text" color="green" @click="reveal = false">
              Закрыть
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CompaniesCard",
  data: () => ({
    reveal: false,
  }),
  props: {
    title: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
