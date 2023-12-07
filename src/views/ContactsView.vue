<template>
  <v-main class="bg-grey-lighten-3">
    <v-parallax
        :src="require('../assets/backAbout.jpg')"
        style="height: 400px"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="title-text text-h1 font-weight-thin mb-4">
          Нам 20 лет!
        </h1>
        <h4 class="subheading">
          На протежении двадцати лет нам доверяют множество заказчиков и вот почему -
        </h4>
      </div>
    </v-parallax>
    <v-container>
      <v-sheet
          height="250"
          rounded
          class="d-flex my-8 justify-center align-center text-center"
      >

      </v-sheet>

    </v-container>
    <v-container>
      <h2 class="text-center py-4">
        Нам доверяют
      </h2>
      <v-row class="text-center justify-center py-4">
<companies-card
v-for="(card,key) in cards"
:key="key"
:title="card.title"
:img="card.img"
:subtitle="card.subtitle"
>
</companies-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CompaniesCard from "@/components/CompaniesCard.vue";

export default {
  data:()=>({
    cards:[
      {
        title:'Росводоканал',
        img:'https://vodanews.info/wp-content/uploads/2019/07/9782c9e7252258ae2c7a85e60c5489d0.jpg',
        subtitle:'Акционерное общество «ОмскВодоканал» выражает благодарность коллективу ООО «Природоохранный центр» за высокий профессионализм,  качественно выполненные работы, внимание и понимание потребностей клиентов.'
      },
      {
        title:'asd',
        img:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324',
        subtitle:'asd'
      },
      {
        title:'asd',
        img:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324',
        subtitle:'asd'
      },
    ],
  }),
  components:{
    CompaniesCard
  }
}
</script>

<style scoped>
.title-text{
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

.subheading{
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

</style>