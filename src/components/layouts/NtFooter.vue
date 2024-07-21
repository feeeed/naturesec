<template>
  <v-footer color="black">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="mylogo">
            <v-img :src="require('../../assets/WDOMcutdq1U.webp')" width="200">
            </v-img>
          </div>
          <div class="companyTitle">
            <v-sheet color="black">
              <p class="text-h4 mb-5 font-weight-bold">Природоохранный центр</p>
              <p class="text-body-1 font-italic mb-16">
                Мы постоянно развиваемся, расширяем объёмы задач. И сегодня мы
                готовы к долгосрочному взаимовыгодному сотрудничеству со всеми
                предпринимателями.
              </p>
            </v-sheet>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="specialLinks d-flex justify-space-around mt-11">
            <div>
              <p class="font-weight-bold mb-5">
                <router-link to="/"> Главная </router-link>
              </p>
            </div>
            <div>
              <p class="font-weight-bold mb-5">
                <router-link to="/about"> О нас </router-link>
              </p>
              <ul class="text-medium-emphasis">
                <li>
                  <router-link to="/about"> Отзывы </router-link>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-weight-bold mb-5">
                <router-link to="/main"> Ресурсы </router-link>
              </p>
              <ul class="text-medium-emphasis">
                <li>
                  <router-link to="/categories"> Услуги </router-link>
                </li>
                <br />
                <li>
                  <router-link to="/main"> Информация </router-link>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-weight-bold mb-5">
                <router-link to="/contacts"> Контакты </router-link>
              </p>
              <ul class="text-medium-emphasis">
                <li>
                  <a href="mailto:naturesecur@mail.ru" style="color: white"
                    >naturesecur@mail.ru</a
                  >
                </li>
                <br />
                <li>+7 (3812) 510-464</li>
                <li>+7 (3812) 377-211</li>
                <li>+7 (3812) 373-115</li>
                <li>+7 (3812) 510-050</li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider :thickness="2" class="border-opacity-100"> </v-divider>
      <v-row>
        <v-col class="mt-10 d-flex align-center" cols="12" sm="6">
          <p class="text-body-1 font-weight-bold">
            © {{ new Date().getFullYear() }} Природоохранный центр
          </p>
        </v-col>
        <v-col class="mt-10 d-flex justify-end" cols="12" sm="6">
          <div class="mr-10">
            <v-btn
              density="compact"
              variant="outlined"
              icon="mdi-plus"
              size="x-large"
            ></v-btn>
            <v-btn
              density="compact"
              variant="outlined"
              icon="mdi-plus"
              size="x-large"
              class="mx-5"
            ></v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  padding-left: 0;
}
li {
  list-style-type: none;
  color: white;
}
a {
  color: white;
}
</style>
