<template>
  <div class="home">
    <v-main class="bg-grey-lighten-3">
      <v-dialog v-model="dialog2" width="auto">
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
            <v-btn color="green" block @click="dialog2=false"
            >Закрыть</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-container>
         <!-- <v-row class="justify-center text-center align-center pt-4">-->
<!--          <v-slide-group-->
<!--              @update:model-value="setSearchQuery"-->

<!--          >-->
<!--            <v-slide-group-item-->
<!--                v-for="(option,key) in buttonsOption"-->
<!--                :key="key"-->
<!--                :value="option.value"-->

<!--                v-slot="{ isSelected, toggle }"-->

<!--            >-->
<!--              <v-btn-->
<!--                  class="ma-2"-->
<!--                  rounded-->
<!--                  :color="isSelected ? 'green' : undefined"-->
<!--                  @click="toggle"-->
<!--              >-->
<!--                {{ option.name }}-->
<!--              </v-btn>-->
<!--            </v-slide-group-item>-->
<!--          </v-slide-group>-->
<!--          </v-row> -->
        <v-row justify="center">
          <v-col
              cols="12"
              sm="2"
              class="pt-7"
              
          >
          <div class="stickyMenu">
          <my-input
              :model-value="searchQuery"
              @update:model-value="setSearchQuery"
          >
          </my-input>
            <v-sheet
                elevation="1"
                :rounded= true
            >
              <div class="pa-4 text-center text-h6">
                Быстрый поиск
                <v-chip-group
                    color="green"
                    column
                    @update:model-value="setSearchQuery"

                >
                  <v-chip
                      v-for="(option,key) in buttonsOption"
                      :key="key"
                      :value="option.value"
                  >
                    {{ option.name }}
                  </v-chip>
                </v-chip-group>
              </div>
              <v-divider class="border-opacity-50"></v-divider>
              <div class="px-4 pt-4 text-center text-h6">
                  Группировка
                </div>
              <div class="pa-4">
                <my-select
                    :model-value="selectedQuery"
                    @update:model-value="setSelectedQuery"
                    :options="sortOptions"
                >
                </my-select>
              </div>
            </v-sheet>
            <v-card

               v-if="dialog2==false"

            class="my-4"
            :rounded=true
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
          </div>
          </v-col>
          <v-col
              cols="12"
              sm="6"
          >
            <post-list
              :posts="selectedPostsAndSearch"
              v-if="!isPostsLoading"
              />
            <div v-else>Идёт загрузка...
              <v-progress-linear
                  indeterminate
                  color="green"
              ></v-progress-linear>

            </div>
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
import MySelect from "@/components/layouts/MySelect.vue";

export default {
  data(){
    return{
      dialog2: undefined
    }
  },
  components: {MySelect, MyInput,PostList},
  mounted() {
    this.fetchPosts();
    this.dialog2 = true;
    if(localStorage.dialog2) this.dialog2 = JSON.parse(localStorage.dialog2);
  },
  watch:{
   dialog2(dialog){
     localStorage.dialog2 = JSON.stringify(dialog);

   }
  },
  computed:{
    ...mapGetters({
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
      buttonsOption:state => state.post.buttonsOption,

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
<style scoped>
.stickyMenu{
  position: sticky;
  top:97px;
  

}

</style>
