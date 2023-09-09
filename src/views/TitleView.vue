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
      <v-container>
        <v-row class="align-center text-center justify-center">
          <div class="text-block-welcome">
            <h2 class="text-h5 font-weight-black py-4 text-black">Услуги природоохранного назначения</h2>
          </div>
        </v-row>
<!--        <v-row>-->
<!--            <v-sheet-->
<!--                class="d-flex  flex-column justify-center flex-wrap  mx-auto px-4 bg-green-lighten-3 text-medium-emphasis"-->
<!--                height="100%"-->
<!--                rounded-->
<!--                max-width="800"-->
<!--                width="100%"-->
<!--                elevation="4"-->
<!--            >-->
<!--              <div class="px-7 py-4">-->
<!--              <ul>-->
<!--                <li>Предоставление специализированной гидрометеорической информации</li>-->
<!--                <li>Разработка проекта зоны санитарной охраны водозаёма</li>-->
<!--                <li>Разработка и согласование проекта НДС, получение на право пользвоаться водным объектом, договора водопользования</li>-->
<!--                <li>Разработка проекта санитарно-защитной зоны</li>-->
<!--                <li>Кадастровые работы, разработка тектового и графического описания сантитарно-защитной зоны</li>-->
<!--                <li>Разработка пояснительной записки к мероприятиям в периоды неблагоприятных метеорологических условий</li>-->
<!--                <li>Разработка и согласование проекта предельно-допустимых выбросов</li>-->



<!--              </ul>-->
<!--              </div>-->

<!--            </v-sheet>-->
<!--          </v-col>-->
<!--          <v-col>-->
<!--            <v-sheet-->
<!--                class="d-flex  flex-column justify-center flex-wrap  mx-auto px-4 bg-green-lighten-3 text-medium-emphasis"-->
<!--                height="100%"-->
<!--                rounded-->
<!--                max-width="800"-->
<!--                width="100%"-->
<!--                elevation="4"-->
<!--            >-->
<!--              <div class="px-7 py-4">-->
<!--                <ul>-->
<!--                  <li>Оформление заявки о постановке на государственный учёт объекта, оказывающего негативное воздействие на окружающую среду</li>-->
<!--                  <li>Заполнение Декларации о плате за негативное воздействие на окружающую среду</li>-->
<!--                  <li>Разработка и согласование проекта нормативов образования отходов и лимитов на их размешение-->
<!--                    ,разработка паспорта опасного отхода</li>-->
<!--                  <li>Оформление отчётов по природопользвоанию, 2тп (воздух),(отходы),(водхоз), отчёт МСП, контроль-->
<!--                    выбросов, технический отчёт, расчёт выбросов</li>-->
<!--                  <li>Составление программы производственного экологического контроля</li>-->
<!--                  <li>Экологический аудит</li>-->
<!--                  <li>Комплексное экологическое обслуживание</li>-->

<!--                </ul>-->
<!--              </div>-->
<!--            </v-sheet>-->
<!--          </v-col>-->


<!--        </v-row>-->
        <v-row>
            <title-post-list
              :posts="sortedPosts"
              />
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