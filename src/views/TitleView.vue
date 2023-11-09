<template>
  <div class="welcome">
    <v-main class="bg-grey-lighten-3">
      <v-container class="v-container--fluid">
      <v-row class="align-content-center justify-center align-center flex-wrap-reverse bg-green-lighten-3 py-14">
        <v-col class="ma-10 ">
          <v-sheet color="green-lighten-3" class="text-h3 py-4 ">
            Лидер региона в области предоставления услуг экологического назначения.
          </v-sheet>
          <v-sheet color="green-lighten-3" class="font-weight-regular text-medium-emphasis">
            Вот уже на протяжение двух десятилетий, взаимодействуя с ведущими проектными
            и научными организациями нашего региона, «Природоохранный центр» помогает успешно решать задачи любого
            уровня сложности предприятиям нашей области. Мы постоянно развиваемся, расширяем объёмы задач,
            растёт круг заказчиков. И сегодня мы готовы к долгосрочному взаимовыгодному сотрудничеству
            со всеми заинтересованными юридическими лицами и индивидуальными предпринимателями.
          </v-sheet>

        </v-col>
        <v-col class="d-flex justify-center flex-grow-1 flex-shrink-0">

          <img src="./../assets/imgrig.png" style="max-width: 100%">
        </v-col>


      </v-row>


      </v-container>
      <v-container class="my-12">
        <v-row class="align-center text-center justify-center">
          <div class="text-block-welcome">
            <h2 class="text-h4 font-weight-black py-4 text-black">Услуги природоохранного назначения</h2>
          </div>
        </v-row>
        <v-row>
            <title-post-list
              :posts="sortedPosts"
              />
        </v-row>

      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-row class="my-12 text-center justify-center">
          <h2 class="text-h4 font-weight-black py-4 text-black">Отвечаем на вопросы</h2>

          <v-expansion-panels variant="inset">
            <v-expansion-panel

                title="Title"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel

                title="Title2"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel
                
                title="Title3"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel

                title="Title4"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>

      </v-container>
    </v-main>
  </div>

</template>

<script>
 import{mapGetters,mapActions} from "vuex";
 import TitlePostList from "@/components/layouts/TitlePostList.vue";
export default {
   components:{TitlePostList},
   mounted() {
     this.fetchPosts();
   },
  computed:{
     ...mapGetters({
       sortedPosts:'sortedPosts',
     }),

  },
  methods:{
     ...mapActions({
       fetchPosts:'fetchPosts',
     })
  }
}
</script>

<style>
.text-block-welcome{
  align-items: center;
  text-align: center;
}
.image-welcome>img{
  max-width: 100%;
}
.img-welcome-block{
  max-width: 100%;
}

</style>