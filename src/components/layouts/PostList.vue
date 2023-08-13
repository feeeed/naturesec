<template>
  <div v-if="posts.length>0">
    <transition-group name="posts-list">
      <post-card
          v-for="(post,key) in posts"

          :key="key"

          :title="post.title"

          :description="post.description"

          :main-content="post.mainContent"
      />
    </transition-group>

  </div>
  <h2 v-else style="color: red">
    Запись не найдена, попробуйте дать более точное описание
  </h2>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
export default {
  components:{PostCard},
  props:{
    posts:{
      type:Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>