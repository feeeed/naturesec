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
          class="d-flex flex-column"
      >
        <v-sheet>
          <p class="text-h4 mb-6">
            Разработка паспортов отходов
          </p>
          <p class="font-weight-light w-75">
            Гарантированное согласование паспортов отходов I-IV классов опасности по всей России
          </p>
        </v-sheet>
        <v-btn
            density="compact"
            variant="outlined"
            rounded=""
            size="x-large"
            min-width="120"
            class="text-none font-weight-bold mt-6 w-50"
        >Узнать точную стоимость</v-btn>

      </v-col>
      <v-col
          cols="12"
          sm="5"
      >
        <v-card
            class="text-center d-flex flex-row align-center justify-center"
            variant="outlined"
            rounded="xl"
            min-height="300"
        >
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
            class="text-center d-flex flex-row align-center justify-center"
            variant="outlined"
            rounded="xl"
            min-height="300"
        >
        </v-card>
      </v-col>
      <v-col
      cols="12"
      sm="3"
      >
        <v-card
            class="text-center d-flex flex-row align-center justify-center"
            variant="outlined"
            rounded="xl"
            min-height="300"
        >
        </v-card>
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