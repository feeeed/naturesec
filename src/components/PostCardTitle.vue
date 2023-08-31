<template>
  <v-col>

  <v-card
      class="mx-auto"
      max-width="400"
  >
    <v-img
        :src="imageURL"
        height="200px"
        cover
    ></v-img>

    <v-card-title
    class="text-lg-h6"
    >
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      <span v-html="description"></span>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          variant="text"
      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'PostCardTitle',
  props:{
    title:{
      type: String,
      default:''
    },
    description:{
      type:String,
      default:''
    },
    mainContent:{
      type: String,
      default:''
    },
    imageURL:{
      type: String,
      default:''
    }
  }
}
</script>

<style>

</style>