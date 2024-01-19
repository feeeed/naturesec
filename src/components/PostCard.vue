<template>
  <v-container>
  <v-card
      class="mx-auto"
      flat
  >
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle><span v-html="description"></span></v-card-subtitle>
        <v-img
            :src="imageURL"
            max-height="800px"
            max-width="800px"
            cover
        ></v-img>

      </v-card-item>
      <v-card-text class="text-h6">
        <span v-html="mainContent"></span>

      </v-card-text>

  </v-card>
  </v-container>
  <v-container class="text-center">
    <v-btn
        size="large"
        color="green-lighten-2"
        variant="tonal"
        @click="$router.push(`/main`)">
      Назад
    </v-btn>
  </v-container>
</template>

<script>
export default {

  name: 'PostCard',
  props:{
    _id:{
      type: String,
    },
    title: {
      type: String,
      default: ''
    },
    description:{
      type: String,
      default: ''
    },
    mainContent:{
      type: String,
      default:''
    },
    imageURL:{
      type: String,
      default:''
    },
  }
}
</script>

<style scoped>

</style>