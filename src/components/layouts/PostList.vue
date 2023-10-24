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

<style scoped>
.posts-list-item{
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active{
  transition: all 0.4s ease;
}
.posts-list-enter-from,
.posts-list-leave-to{
  opacity: 0;
  transform: translateX(230px);
}
.posts-list-move{
  transition: transform 0.8s ease;
}
</style>