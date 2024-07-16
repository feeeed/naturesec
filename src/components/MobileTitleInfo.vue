<template>
  <v-row>
    <v-col
    cols="6">
      <v-card
          class="text-center d-flex flex-column align-center justify-center bg-grey-lighten-4"
          variant="flat"
          rounded="xl"
          min-height="200"
      >
        <v-card-item>
          <div class="text-h5">
            Нам <span class="text-light-green-accent-4">20</span> лет
          </div>
        </v-card-item>
        <v-card-item>
          <div class="text-medium-emphasis">
            Значительный опыт в области создания проектов.
          </div>
        </v-card-item>
      </v-card>

    </v-col>
    <v-col
        cols="6">
      <v-card
          class="text-center d-flex flex-column align-center justify-center bg-grey-lighten-4"
          variant="flat"
          rounded="xl"
          min-height="200"
      >
        <v-card-item>
          <div class="font-weight-medium">
            Наш рейтинг среди клиентов
          </div>
        </v-card-item>
        <v-card-item>
          <v-rating
              v-model="rating"
              color="light-green-accent-4"
              density="compact"
              readonly
              half-increments
          >
          </v-rating>
          <div class="px-3">{{ totalRating }} оценок</div>

        </v-card-item>

      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col
    cols="8">
      <v-card
          class="text-center d-flex flex-column align-center justify-center bg-grey-lighten-4"
          variant="flat"
          rounded="xl"
          min-height="200"
      >
        <v-card-item>
          <div class="font-weight-medium">
            Собственный информационный портал
          </div>
          <v-icon
              icon="mdi-card-bulleted-settings"
              size="45"
              class="my-5"
          >
          </v-icon>
          <div class="my-3 font-weight-medium text-medium-emphasis">
            Новости, информация, документы.
          </div>
        </v-card-item>
      </v-card>

    </v-col>
    <v-col
    cols="4">
      <v-card
          class="text-center d-flex flex-row align-center justify-center bg-black"
          variant="flat"
          rounded="xl"
          min-height="225"
      >
        <v-card-actions
        >
          <v-btn
              density="compact"
              variant="outlined"
              icon="mdi-arrow-right-bold"
              size="x-large"
              color="light-green-accent-4"
          ></v-btn>
        </v-card-actions>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name:'mobile-title--info',
  data:() => ({rating:4.5, totalRating:17,}),

}
</script>

<style lang="scss" scoped>

</style>