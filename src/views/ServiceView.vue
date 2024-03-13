<template>
  <v-main>
  <div>
    <v-container>
    <v-row
    class="justify-center"
    >
      <v-col
          cols="12"
          sm="5"
          class="d-flex flex-column justify-space-around"
      >
        <v-sheet>
          <p class="text-h3 mb-6">
            {{serviceEk.title}}
          </p>
          <p class="font-weight-light text-h5 w-75">
            {{serviceEk.description}}
          </p>
        </v-sheet>
        <v-btn
            density="compact"
            variant="flat"
            rounded=""
            color="#3ADA2A"
            size="x-large"
            height="60"
            class="text-none font-weight-bold text-white w-50"
        >
          Узнать точную стоимость
        </v-btn>
      </v-col>
      <v-col
          cols="12"
          sm="5"
      >

        <v-card
            class=""
            variant="outlined"
            rounded="xl"
            max-height="300"
        >
            <v-img
                aspect-ratio="16/9"
                :src="serviceEk.image"
                cover

            ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row
    class="justify-center"
    >
      <v-col
      cols="12"
      sm="7"
      >
        <v-card
            class="text-center d-flex flex-row text-start"
            variant="outlined"
            rounded="xl"
            min-height="300"
        >
          <v-sheet>
            <p class="text-h5 ml-6 my-4">
              Как мы разрабатываем проект:
            </p>
            <span v-html="serviceEk.mainText"></span>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col
      cols="12"
      sm="3"
      >
        <v-card
            class="text-center d-flex flex-row justify-center"
            variant="outlined"
            rounded="xl"
            min-height="300"
        >
          <v-sheet>
            <p class="mt-4 text-h5">
              Сроки:
            </p>
            <p class="mt-5">
              {{serviceEk.specialWords}}
            </p>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
    <v-row
    class="justify-center my-16"
    >
      <v-col
      cols="12"
      sm="10">
      <v-timeline direction="horizontal">
        <v-timeline-item>
          <template v-slot:opposite>
            Opposite content
          </template>
          <div>
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite>
            Opposite content
          </template>
          <div>
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite>
            Opposite content
          </template>
          <div>
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
      </v-col>
    </v-row>

    </v-container>
  </div>
  </v-main>
</template>

<script>
import {mapActions, mapGetters } from "vuex";

export default {
  mounted() {
    this.fetchServiceEk(this.$route.params.id)

  },
  computed:{
    ...mapGetters({
      serviceEk:'serviceEk'

    }),

  },
  methods:{
    ...mapActions({
      fetchServiceEk:'fetchServiceEk'

    }),

  },
}
</script>

<style lang="scss" scoped>

</style>