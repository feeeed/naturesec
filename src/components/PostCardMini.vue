<template>
  <v-container>
    <v-card
    width="400">
      <v-card-item>
        <v-card-title>
          {{title}}
        </v-card-title>
        <v-card-actions>
          <v-btn
              color="green-lighten-2"
              variant="text"
              @click="$router.push(`/posts/${_id}`)"
          >
            Подробнее
          </v-btn>
        </v-card-actions>
      </v-card-item>

    </v-card>
  </v-container>

</template>

<script>
export default {
  name: 'PostCardMini',
  props:{
    _id:{
      type: String,
    },
    title: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>

</style>