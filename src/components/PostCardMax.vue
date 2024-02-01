<template>
    <v-card
        class="overflow-hidden my-5"
        max-width="800px"
        flat
    >
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle><span v-html="description"></span></v-card-subtitle>
        <v-img
            v-if="imageURL"
            :src="imageURL"
            max-height="800px"
            max-width="800px"
            cover
        ></v-img>

      </v-card-item>
      <v-card-text class="text-h6">

        <span  v-html="miniContent"></span>

      </v-card-text>
      <v-card-actions>
        <v-btn
            color="green-lighten-2"
            variant="text"
            @click="$router.push(`/posts/${id}`)"

        >
          Подробнее
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {

  name: 'PostCard',
  props:{
    id:{
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
    miniContent:{
      type: String,
      default:''
    }
  }
}
</script>

<style>

</style>