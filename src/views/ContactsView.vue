<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <h2 class="text-center py-4">
        Наши сотрудники
      </h2>
      <v-row class="text-center justify-center py-4">
        <EmployeeCard
            v-for="(emp,key) in employers"
            :key="key"
            :title="emp.title"
            :img="emp.img"
            :subtitle="emp.subtitle"
        >
        </EmployeeCard>

      </v-row>
    </v-container>
    <v-parallax
        :src="require('../assets/backfroundAbout.jpg')"
        style="height: 400px"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </div>
    </v-parallax>
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
import EmployeeCard from "@/components/layouts/EmployeeCard.vue";
export default {
  data:()=>({
    cards:[
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
    employers:[
      {
        title:'ФИО',
        img:require('../assets/avatarName.jpg'),
        subtitle:'отдел'
      },
      {
        title:'ФИО',
        img:require('../assets/avatarName.jpg'),
        subtitle:'отдел'
      },
      {
        title:'ФИО',
        img:require('../assets/avatarName.jpg'),
        subtitle:'отдел'
      },
    ]
  }),

  components:{
    CompaniesCard, EmployeeCard
  }
}
</script>

<style lang="scss" scoped>

</style>