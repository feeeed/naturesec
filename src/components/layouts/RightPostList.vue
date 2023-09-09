<template>
  <post-card-mini
      v-for="(post,key) in posts"
      :key="key"
      :_id="post._id"
      :title="post.title"
  />


</template>

<script>
import PostCardMini from "@/components/PostCardMini.vue";

export default {
  components: {PostCardMini},
  props:{
    posts: {
      type: Array,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>

</style>