<template>
  <v-col cols="12" sm="4">
    <v-sheet>
      <p class="text-h5 font-weight-bold">
        {{ title }}
        <v-icon color="light-green-accent-4" :icon="icon" size="35"> </v-icon>
      </p>
      <p
        class="my-3"
        v-for="(services, key) in servicesEk"
        :key="key"
        :id="services.id"
      >
        <router-link :to="{ name: 'Услуги', params: { id: services.id } }">
          {{ services.title }}
        </router-link>
      </p>
    </v-sheet>
  </v-col>
  <!-- <v-col
        cols="12"
        sm="9"
        class="d-flex"
        >
        <v-card
        height="200"
        width="400"
        rounded="xl"
        variant="outlined"
        class="mr-10"
        v-for="(services,key) in servicesEk"
        :key="key"
        :id="services.id"
        >
        <v-card-item>
            <v-card-title>
                {{ services.title }}
               
            </v-card-title>
            <v-card-subtitle>
                {{ services.description }}
               

            </v-card-subtitle>
            <v-btn 
                        density="compact" 
                        variant="outlined" 
                        rounded="" 
                        size="x-large" 
                        min-width="120"
                        class="text-none font-weight-bold"
                        @click="$router.push(`/service/${services.id}`)"
                        >Подробнее</v-btn>


        </v-card-item>
        </v-card>
        </v-col> -->
</template>

<script>
export default {
  name: "CategoryRow",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    servicesEk: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
