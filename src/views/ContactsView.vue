<template>
  <v-main class="">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col>
          <v-sheet class="d-flex flex-column align-center mb-10">
            <p class="text-h4 text-xl-h3 font-weight-bold mb-3">Нам 20 лет!</p>
            <p class="text-body-1 font-weight-medium text-medium-emphasis">
              На протежении двадцати лет нам доверяют множество заказчиков и вот
              почему -
            </p>
          </v-sheet>
          <v-card
            class="text-center d-flex flex-row align-center justify-center"
            :image="require('@/assets/testpic.webp')"
            variant="outlined"
            rounded="xl"
            min-height="400"
          >
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
            variant="outlined"
            :image="require('@/assets/testpic2.webp')"
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
.title-text {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

.subheading {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

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
