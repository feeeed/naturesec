<template>
  <v-col>
  <v-card
  class="my-4"
  rounded="xl"
  variant="outlined"
  min-width="350"
  >
    <div class="image-section">
      <v-img
      :src="img"
      height="200px"

      >
      </v-img>
    </div>
    <div class="text-section">
      <v-card-text class="pb-0 my-4">
        <p class="text-h6 text--primary">
          {{ title }}
        </p>
      </v-card-text>

    </div>



  </v-card>
  </v-col>
</template>

<script>
export default {
  name:'ReviewCard',
  props: {
    title: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }

}
</script>

<style scoped>

</style>