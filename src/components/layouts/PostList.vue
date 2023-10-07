<template>
  <div v-if="posts.length>0">
    <transition-group name="posts-list">
      <post-card-max
          v-for="(post,key) in posts"

          :key="key"

          :_id="post._id"

          :title="post.title"

          :description="post.description"

          :imageURL="post.imageURL"

          :miniContent="post.miniContent"

      />
    </transition-group>

  </div>
  <h2 v-else style="color: red">
    Запись не найдена, попробуйте дать более точное описание
  </h2>
</template>

<script>
import PostCardMax from "@/components/PostCardMax.vue";
export default {
  components:{PostCardMax},
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