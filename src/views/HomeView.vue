<template>
  <div class="home">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>

          <v-col
              cols="12"
              sm="8"
          >

              <post-card v-for="(post,key) in posts"
              :key="key"
              :title="post.title"
              :description="post.description"
              :main-content="post.mainContent"
              />


          </v-col>

          <v-col
              cols="12"
              sm="4"
          >
            <v-sheet
                min-height="1100"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>


    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src

import PostCard from "@/components/PostCard.vue";
import{mapGetters,mapActions} from "vuex";

export default {
  components: {PostCard},
  mounted() {
    this.fetchPosts();
  },
  computed:{
    ...mapGetters({
      posts:'posts'
    })
  },
  methods:{
    ...mapActions({
      fetchPosts: 'fetchPosts'

    })
  }
}
</script>
