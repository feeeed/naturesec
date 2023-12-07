<template>
  <div class="home">
    <v-main class="bg-grey-lighten-3">
      <v-dialog v-model="dialogWin" width="auto">
        <v-card>
          <v-card-text>
            <span class="text-red text-center">Внимание!</span>
            <br>
            Срок сдачи отчётности за 2023 год!
            <br>
            <ul>
              <li>Форма № 2-ТП (воздух) — до 22 января</li>
              <li>Форма 2-ТП (отходы) — до 1 февраля</li>
              <li>Платежи — до 1 марта</li>
              <li>Сдача декларации о плате — до 10 марта</li>
              <li>Отчет ПЭК — до 25 марта</li>
              <li>Экосбор — до 1 апреля</li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" block @click="setDialogWin"
            >Закрыть</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-container>
        <v-row>
          <my-input
              :model-value="searchQuery"
              @update:model-value="setSearchQuery"
              placeholder="Поиск"
          >
          </my-input>
          <v-row
          class="text-center align-center justify-center"
          >
            <v-container>
              <my-select
                  :model-value="selectedQuery"
                  @update:model-value="setSelectedQuery"
                  :options="sortOptions"
              >
              </my-select>


            </v-container>

          </v-row>
        </v-row>
        <v-row>

          <v-col
              cols="12"
              sm="9"
          >
            <post-list
              :posts="selectedPostsAndSearch"
              v-if="!isPostsLoading"
              />
            <div v-else>Идёт загрузка...</div>


          </v-col>

          <v-col
              cols="12"
              sm="3"
          >
            <v-card
               v-if="dialogWin==false"
            class="my-4"
            >
              <v-card-text>
                <span class="text-red text-center">Внимание!</span>
                <br>
                Срок сдачи отчётности за 2023 год!
                <br>
                <ul>
                  <li>Форма № 2-ТП (воздух) — до 22 января</li>
                  <li>Форма 2-ТП (отходы) — до 1 февраля</li>
                  <li>Платежи — до 1 марта</li>
                  <li>Сдача декларации о плате — до 10 марта</li>
                  <li>Отчет ПЭК — до 25 марта</li>
                  <li>Экосбор — до 1 апреля</li>
                </ul>
              </v-card-text>

            </v-card>


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
import MySelect from "@/components/layouts/MySelect.vue";

export default {
  data(){
    return{
      dialog: true,

    }
  },
  components: {MySelect, RightPostList, MyInput,PostList},
  mounted() {
    this.fetchPosts();
    if(localStorage.dialog) this.dialog = localStorage.dialog;
  },
  watch:{
   dialog(newName){
     localStorage.dialog = newName;
   }
  },
  computed:{
    ...mapGetters({
      sortedPosts:'sortedPosts',
      selectedPostsAndSearch:'selectedPostsAndSearch',

    }),
    ...mapState({
      posts:state => state.post.posts,
      isPostsLoading:state => state.post.isPostsLoading,
      searchQuery:state => state.post.searchQuery,
      selectedQuery:state => state.post.selectedQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      dialogWin: state => state.post.dialogWin,
      sortOptions:state => state.post.sortOptions,
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
      setDialogWin: 'setDialogWin',
      setSelectedQuery:'setSelectedQuery',

    })

  }
}
</script>
<style>
</style>
