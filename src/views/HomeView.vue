<template>
  <div class="home">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <my-input
              :model-value="searchQuery"
              @update:model-value="setSearchQuery"
              placeholder="Поиск"
          >

          </my-input>
        </v-row>
        <v-row>

          <v-col
              cols="12"
              sm="9"
          >
            <post-list
              :posts="searchPosts"
              v-if="!isPostsLoading"
              />
            <div v-else>Идёт загрузка...</div>


          </v-col>

          <v-col
              cols="12"
              sm="3"
          >
            <h3 class="text-center">
              Основные услуги
            </h3>

            <right-post-list
              :posts="sortedPosts"
              />





          </v-col>
        </v-row>
      </v-container>


    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/layouts/PostList.vue";
import{mapGetters,mapActions,mapState,mapMutations} from "vuex";
import MyInput from "@/components/layouts/MyInput.vue";
import RightPostList from "@/components/layouts/RightPostList.vue";

export default {
  components: {RightPostList, MyInput,PostList},
  mounted() {
    this.fetchPosts();
  },
  computed:{
    ...mapGetters({
      searchPosts:'searchPosts',
      sortedPosts:'sortedPosts',
    }),
    ...mapState({
      posts:state => state.post.posts,
      isPostsLoading:state => state.post.isPostsLoading,
      searchQuery:state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
    })
  },
  methods:{
    ...mapActions({
      fetchPosts: 'fetchPosts',
      loadMorePosts: 'loadMorePosts',
    }),
    ...mapMutations({
      setSearchQuery: 'setSearchQuery',
      setPage:'setPage',
    })

  }
}
</script>
<style>
</style>
