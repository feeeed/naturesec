<template>
  <v-container>
    <v-card
    width="auto">
      <v-card-item>
        <v-card-text>

          {{title}}

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
      </v-card-item>

    </v-card>
  </v-container>

</template>

<script>
export default {
  name: 'PostCardMini',
  props:{
    id:{
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