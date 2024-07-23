<template>
  <v-main>
    <div>
      <v-container>
        <v-row class="justify-center">
          <v-col
            cols="12"
            sm="5"
            class="d-flex flex-column justify-space-around"
          >
            <v-sheet>
              <p class="text-h3 mb-6">
                {{ serviceEk.title }}
              </p>
              <p class="font-weight-light text-h5 w-75">
                {{ serviceEk.description }}
              </p>
            </v-sheet>
            <v-btn
              density="compact"
              variant="flat"
              rounded=""
              color="#3ADA2A"
              size="x-large"
              height="60"
              class="text-none font-weight-bold text-white mt-5"
              @click="customJivoOpen()"
            >
              Узнать точную стоимость
            </v-btn>
          </v-col>
          <v-col cols="12" sm="5">
            <v-card class="" variant="outlined" rounded="xl" max-height="300">
              <v-img
                aspect-ratio="16/9"
                :src="serviceEk.image"
                cover
                height="300"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="12" sm="7">
            <v-card
              class="text-center d-flex flex-row text-start"
              variant="outlined"
              rounded="xl"
              min-height="300"
            >
              <v-sheet class="ml-6">
                <p class="text-h5 ml-6 my-4">Подробнее:</p>
                <span class="ml-6" v-html="serviceEk.mainText"></span>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card
              class="text-center d-flex flex-row justify-center"
              variant="outlined"
              rounded="xl"
              min-height="300"
            >
              <v-sheet>
                <p class="mt-4 text-h5">Сроки:</p>
                <p class="mt-5">
                  {{ serviceEk.specialWords }}
                </p>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="justify-center my-16 d-none d-sm-flex">
          <v-col cols="12" sm="10">
            <v-timeline direction="horizontal">
              <v-timeline-item dot-color="green">
                <template v-slot:opposite> 1 </template>
                <div>
                  <div class="text-h6">Заявка</div>
                  <p>> Позвоните нам по телефону</p>
                  <p>
                    <span class="text-green">+7 (3812) 510-464</span> или
                    оставьте заявку на сайте.
                  </p>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green">
                <template v-slot:opposite> 2 </template>
                <div>
                  <div class="text-h6">Договор и оплата</div>
                  <p>Мы подбираем оптимальное решение по срокам и стоимости.</p>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green">
                <template v-slot:opposite> 3 </template>
                <div>
                  <div class="text-h6">Работа экологов</div>
                  <p>Разрабатываем и согласуем документацию.</p>
                </div>
              </v-timeline-item>
              <v-timeline-item dot-color="green">
                <template v-slot:opposite> 4 </template>
                <div>
                  <div class="text-h6">Результат</div>
                  <p>Вы получаете готовый результат</p>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <services-prew-list
        :servicesEk="similarServicesEk"     
        />   
      </v-container>
    </div>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ServicesPrewList from "@/components/ServicesPrewList.vue";

export default {
  components:{
    ServicesPrewList

  },
  mounted() {
    this.fetchServiceEk(this.$route.params.id); 
    this.fetchSimilarServicesEk(this.$route.params.id)
  },
  updated(){
    this.fetchServiceEk(this.$route.params.id); 
  },
  computed: {
    ...mapGetters({
      serviceEk: "serviceEk",
      similarServicesEk: "similarServicesEk",
    }),
  },
  methods: {
    ...mapActions({
      fetchServiceEk: "fetchServiceEk",
      fetchSimilarServicesEk:"fetchSimilarServicesEk"
    }),
    customJivoOpen() {
      let params = { start: "chat" };
      // eslint-disable-next-line
      let apiResult = jivo_api.open(params);
      // eslint-disable-next-line

      // eslint-disable-next-line
      if (apiResult.result === "fail") {
        // eslint-disable-next-line
        console.log("Widget failed to open");
        // eslint-disable-next-line
      } else {
        // eslint-disable-next-line
        console.log("Widget open successfully");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
