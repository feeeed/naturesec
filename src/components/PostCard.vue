<template>
  <v-container>
  <v-card
      class="mx-auto"
      flat
  >
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle><span v-html="description"></span></v-card-subtitle>

      </v-card-item>
      <v-card-text>
        <span v-html="mainContent"></span>

      </v-card-text>

  </v-card>
  </v-container>
</template>

<script>
export default {

  name: 'PostCard',
  props:{
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

<style>


</style>