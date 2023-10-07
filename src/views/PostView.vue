<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <post-card
          :title="post.title"
          :description="post.description"
          :main-content="post.mainContent"
          :imageURL="post.imageURL"

      >

      </post-card>


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

<style>

li {
  list-style-type: none;
}
</style>