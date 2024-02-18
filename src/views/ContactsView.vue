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
          min-height="250"
          rounded
          class="d-flex my-8 justify-center align-center text-center"
      >
        <div>
        <h3 class="text-h4 font-weight-black text-green-lighten-3">
          «Природоохранный центр» - это:
        </h3>
          <ul class="py-4 px-2">
            <li>
              – многолетний успешный опыт разработки всех видов экологической документации (ПДВ, ПНООЛР, СЗЗ, отчеты об образовании отходов, паспорта опасных отходов);
            </li>
            <li>
              – профессиональная команда дипломированных экологов, постоянно повышающих квалификацию;
            </li>
            <li>
              – использование современного программного обеспечения;
            </li>
            <li>
              – индивидуальный подход к каждому заказчику.
            </li>
          </ul>
        </div>

      </v-sheet>

    </v-container>
    <v-container>
      <h2 class="text-center py-4">
        Нам доверяют
      </h2>
      <v-row class="text-center justify-space-around py-4 ">

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

        title:'Завод Модульных Конструкций-Сибирь',
        img:require('../assets/logo-f.webp'),
        subtitle:'К разработчикам мы обращались. Вы единственные кто смогли пояснить и  по полочкам разложить всю информацию по нашей ситуации.\n' +
            'А главный инженер нас иногда не слышит и хочет напрямую пообщаться с профессионалами своего дела.\n' +
            'Спасибо Вам за консультацию. Именно Вам удалось  пояснить всю цепочку действий.\n'
      },
      {
        title:'Кайрос',
        img:'https://kairos-firm.ru/local/templates/kairos/assets/img/logo.svg',
        subtitle:'ЗАО фирма «Кайрос» сотрудничает с ООО «Природоохранный центр» в области охраны окружающей среды более 10 лет.\n' +
            'За это время для нашей организации сотрудниками ООО «Природоохранный центр» было разработано несколько проектов допустимых выбросов (ПДВ) и проект санитарно-защитной зоны (СВ). Так же на ежегодной основе выполняются все виды необходимой отчётности перед государственными органами в области экологического законодательства.\n'

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

ul{
  margin-left: 0;
  /* Отступ слева в браузере IE и Opera */
  padding-left: 0;
  /* Отступ слева в браузере Firefox, Safari, Chrome */
}

li{
  list-style-type: none;
}

</style>