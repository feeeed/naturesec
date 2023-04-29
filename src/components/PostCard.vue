<template>
  <v-container>
  <v-card
      class="mx-auto"
      flat
  >
    <v-card-text
    >
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">
        {{ title }}
      </p>
      <p>{{ description }}</p>
      <div class="text--primary">
        {{ mainContent}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn

      >
        Learn More
      </v-btn>
    </v-card-actions>

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
    }
  }
}
</script>

<style>



</style>