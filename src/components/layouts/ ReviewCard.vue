<template>
  <v-col>
    <v-card class="my-4" rounded="xl" variant="outlined" min-width="350">
      <div class="image-section">
        <v-img :src="img" height="200px"> </v-img>
      </div>
      <div class="text-section">
        <v-card-text class="pb-0 my-4">
          <p class="text-h6 text--primary">
            {{ title }}
          </p>
        </v-card-text>
      </div>

      <div class="actions-section">
        <v-card-actions>
          <v-btn color="#3ADA2A" variant="text" @click="reveal = true">
            Читать отзыв
          </v-btn>
        </v-card-actions>
      </div>
      <v-expand-transition>
        <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary my-5">{{ title }}</p>
            <p>
              {{ subtitle }}
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn color="#3ADA2A" variant="text" @click="reveal = false">
              Закрыть
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
  name: "ReviewCard",
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

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
