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
    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="$router.push(`/posts/${_id}`)"

      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
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

<style>


</style>