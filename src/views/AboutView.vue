<template>
  <v-main class="bg-grey-lighten-3">
    <div class="about-main">
      <div class="about-title text-center">
        <h1>Контакты</h1>
      </div>

      <div class="map-block">
        <yandex-map :coords="coords">
          <ymap-marker
              marker-id="123"
              :coords="coords"
          ></ymap-marker>
        </yandex-map>
      </div>
      <v-container class="py-7">
        <v-row class="align-center text-center justify-center">
          <v-card
              class="mx-auto my-4"
              width="400"
              height="150"

          >
            <template v-slot:title>
              Наши телефоны
            </template>

            <v-card-text>
              <li>+7 (3812) 510-464</li>
              <li>+7 (3812) 377-211</li>
              <li>+7 (3812) 373-115</li>
              <li>+7 (3812) 510-050</li>
            </v-card-text>
          </v-card>
          <v-card
              class="mx-auto my-4"
              width="400"
              height="150"

          >
            <template v-slot:title>
              Наш офис
            </template>

            <v-card-text>
              <h3>Природоохранный центр</h3>
              Учебная, 152
              <br>102 офис; 1 этаж
              <br>Центральный округ, Омск, 644046
            </v-card-text>
          </v-card>
          <v-card
              class="mx-auto my-4"
              width="400"
              height="150"


          >
            <template v-slot:title>
              Наши соцсети
            </template>

            <v-card-text>
              <v-btn class="ma-2" icon href="https://vk.com/naturesecur">
                <img src="../assets/vk-new.png" height="50" width="50"/>
              </v-btn>
              <v-btn class="ma-2" icon>
                <img src="../assets/telegramlogo.png" height="50" width="50"/>
              </v-btn>
              <v-btn class="ma-2" icon>
                <img src="../assets/whatsapplogo.png" height="50" width="50"/>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>

    </div>
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
}
.about-main{
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 25px;
  margin-left: 25px;


}
.about-title{
  margin-top: 50px;
  margin-bottom: 50px;
}
.map-block{
  width: auto;
  height: 450px;
}
.sociallinks-block{
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.link-top{
  margin-right: 20px;
  width: 120px;
  height: 60px;
  background: rgba(71, 103, 45, 0.95);
  border-radius: 2em;
  text-align: center;
  align-items: center;
}
.img-link-top{
  padding-top: 5px;
}

.social-links{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.cards-info{
  display: flex;
  flex-direction: row;
}
li {
  list-style-type: none;
}
</style>