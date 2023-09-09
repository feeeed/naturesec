<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <post-card
          :title="post.title"
          :description="post.description"
          :main-content="post.mainContent"


      >

      </post-card>

      Страница {{$route.params.id}}

    </v-container>
  </v-main>






</template>

<script>
import {mapActions, mapGetters,} from "vuex";
import PostCard from "@/components/PostCard.vue";


 export default {
   components:{
     PostCard
   },
  mounted() {
    this.fetchPost(this.$route.params.id);
  },
  computed:{
    ...mapGetters({
      post: 'post'

    }),
  },
  methods:{
    ...mapActions({
      fetchPost:'fetchPost',
    }),
  }
}
</script>

<style lang="scss" scoped>

</style>