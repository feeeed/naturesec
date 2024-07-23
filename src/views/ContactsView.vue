<template>
  <v-main class="">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col>
          <v-card
            class="text-center d-flex flex-row align-center justify-center"
            variant="outlined"
            rounded="xl"
            max-height="600"
          >
            <v-parallax
              :src="
                require('@/assets/aTaBo2kIdSRoEqjqZmn269dQRqKb2sUOY8MgkL_F2cc.webp')
              "
              :scale="0.5"
            >
              <div
                class="d-flex flex-column fill-height justify-center align-center text-white"
              >
                <h1 class="text-h4 text-xl-h3 font-weight-bold mb-3">
                  Нам 20 лет!
                </h1>
                <h4 class="text-body-1 font-weight-medium">
                  На протежении двадцати лет нам доверяют множество заказчиков и
                  вот почему -
                </h4>
              </div>
            </v-parallax>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" class="d-flex align-center">
          <v-sheet>
            <p class="text-h4 mb-6">Природоохранный центр - это:</p>
            <ul class="font-weight-light">
              <li>
                1. Многолетний успешный опыт разработки всех видов экологической
                документации (ПДВ, ПНООЛР, СЗЗ, отчеты об образовании отходов,
                паспорта опасных отходов);
              </li>
              <li>
                2. Профессиональная команда дипломированных экологов, постоянно
                повышающих квалификацию;
              </li>
              <li>3. Использование современного программного обеспечения;</li>
              <li>4. Индивидуальный подход к каждому заказчику.</li>
            </ul>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card
            class="text-center d-flex flex-row align-center justify-center"
            :image="require('@/assets/titlepnsdf.png')"
            variant="outlined"
            rounded="xl"
            min-height="500"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container> </v-container>

    <v-container>
      <h2 class="text-center py-4">Нам доверяют</h2>
      <v-row class="text-center justify-space-around py-4">
        <review-card
          v-for="(card, key) in cards"
          :key="key"
          :title="card.title"
          :img="card.img"
          :subtitle="card.subtitle"
        >
        </review-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ReviewCard from "@/components/layouts/ ReviewCard.vue";

export default {
  data: () => ({
    containerWidth: false,
    parallaxVersion: null,
    cards: [
      {
        title: "Росводоканал",
        img: "https://vodanews.info/wp-content/uploads/2019/07/9782c9e7252258ae2c7a85e60c5489d0.jpg",
        subtitle:
          "Акционерное общество «ОмскВодоканал» выражает благодарность коллективу ООО «Природоохранный центр» за высокий профессионализм,  качественно выполненные работы, внимание и понимание потребностей клиентов.",
      },
      {
        title: "Завод Модульных Конструкций-Сибирь",
        img: require("../assets/logo-f.webp"),
        subtitle:
          "К разработчикам мы обращались. Вы единственные кто смогли пояснить и  по полочкам разложить всю информацию по нашей ситуации.\n" +
          "А главный инженер нас иногда не слышит и хочет напрямую пообщаться с профессионалами своего дела.\n" +
          "Спасибо Вам за консультацию. Именно Вам удалось  пояснить всю цепочку действий.\n",
      },
      {
        title: "Кайрос",
        img: "https://kairos-firm.ru/local/templates/kairos/assets/img/logo.svg",
        subtitle:
          "ЗАО фирма «Кайрос» сотрудничает с ООО «Природоохранный центр» в области охраны окружающей среды более 10 лет.\n" +
          "За это время для нашей организации сотрудниками ООО «Природоохранный центр» было разработано несколько проектов допустимых выбросов (ПДВ) и проект санитарно-защитной зоны (СВ). Так же на ежегодной основе выполняются все виды необходимой отчётности перед государственными органами в области экологического законодательства.\n",
      },
    ],
  }),
  components: {
    ReviewCard,
  },
};
</script>

<style scoped>
ul {
  margin-left: 0;
  /* Отступ слева в браузере IE и Opera */
  padding-left: 0;
  /* Отступ слева в браузере Firefox, Safari, Chrome */
}

li {
  list-style-type: none;
  margin-bottom: 25px;
}
</style>
