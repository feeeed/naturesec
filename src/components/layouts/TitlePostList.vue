<template>
  <transition-group name="posts-list">
    <post-card-title
      v-for="(post, key) in posts"
      :key="key"
      :_id="post._id"
      :title="post.title"
      :description="post.description"
      :main-content="post.mainContent"
      :imageURL="post.imageURL"
    />
  </transition-group>
</template>

<script>
import PostCardTitle from "@/components/PostCardTitle.vue";
export default {
  components: {
    PostCardTitle,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
