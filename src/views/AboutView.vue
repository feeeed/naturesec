<template>
  <v-main>
    <v-container>
    <div class="about-main">
      <v-row>
        <v-col
        cols="12"
        sm="9"
        >
          <yandex-map :coords="coords">
            <ymap-marker
                marker-id="123"
                :coords="coords"
            ></ymap-marker>
          </yandex-map>
        </v-col>
        <v-col
        cols="12"
        sm="3">
          <v-card
              class="text-center d-flex flex-row align-center justify-center"
              min-width="200"
              min-height="150"
              variant="outlined"
              rounded="xl"
          >
            <v-btn
                variant="outlined"
                icon="mdi-plus"
                size="x-large"
                class="mx-5"
            ></v-btn>

            <v-btn
                variant="outlined"
                icon="mdi-plus"
                size="x-large"
                class="mx-5"

            ></v-btn>
          </v-card>
          <v-card
              class="text-center mt-5 d-flex flex-column align-center justify-center bg-black"
              min-width="200"
              min-height="280"
              variant="outlined"
              rounded="xl"
          >
            <v-icon
            color="green"
            icon="mdi-email"
            size="100"
            >
            </v-icon>
            <v-card-title>
              <a href="mailto:naturesecur@mail.ru" class="text-h5" style="color: white">naturesecur@mail.ru</a>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        cols="12"
        sm="6">
          <v-card
              class="d-flex align-center justify-center bg-black"
              min-width="200"
              min-height="250"
              variant="outlined"
              rounded="xl"
          >
            <v-card-title class="d-flex align-center">
              <p class="text-subtitle-2 text-md-h5 text-xl-h4">
                Смотреть на большой карте
              </p>
              <v-btn
                  variant="outlined"
                  icon="mdi-arrow-top-left-bottom-right"
                  size="x-large"
                  class="mx-4"
                  color="green"
                  href="https://yandex.ru/maps/-/CDBDIKKb"
              ></v-btn>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
        cols="12"
        sm="3">
          <v-card
              class="text-center d-flex flex-column align-center justify-center"
              min-width="200"
              min-height="250"
              variant="outlined"
              rounded="xl"
          >
            <v-card-title
            class="text-subtitle-2 text-xl-h6">
              <h3>Природоохранный центр</h3>
              Учебная, 152
              <br>102 офис; 1 этаж
              <br>Центральный округ, Омск, 644046
            </v-card-title>
          </v-card>
        </v-col>
        <v-col
            cols="12"
            sm="3"
        >
          <v-card
              class=" d-flex flex-column align-center justify-center"
              min-width="200"
              min-height="250"
              variant="outlined"
              rounded="xl"
          >
            <v-card-title class="text-h5">
              <li>+7 (3812) 510-464</li>
              <li>+7 (3812) 377-211</li>
              <li>+7 (3812) 373-115</li>
              <li>+7 (3812) 510-050</li>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
    </v-container>
  </v-main>
</template>
<script>

export default {
  data: () => ({
    items: [
      {
        title: '+7 (3812) 510-464',
        value: 1,
      },
      {
        title: '+7 (3812) 377-211',
        value: 2,
      },
      {
        title: '+7 (3812) 373-115',
        value: 3,
      },
    ],
  }),
  setup() {
    return {
      coords: [54.969844, 73.392204],
    }
  }
}
</script>
<style>
.ymap-container {
  height: 450px;
  border: solid 1px;
  border-radius: 20px;
  padding: 5px;
}
.about-main{
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 25px;
  margin-left: 25px;


}
li {
  list-style-type: none;
}
</style>