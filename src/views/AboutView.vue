<template>
  <v-main class="bg-grey-lighten-3">
    <div class="about-main">
      <div class="about-title">
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
      <div class="about-adress">
        <h2 class="text-medium-emphasis">Адрес: 644046, г. Омск,
          ул. Учебная угол Маяковского 152/20</h2>
      </div>
      <div class="sociallinks-block">
        <div class="social-descriprion">
          <h3>
            Наши социальные сети
          </h3>
        </div>
        <div class="social-links">
            <v-col cols="12" sm="6" md="4">
              <v-btn
                  class="ma-2"
                  icon=""

              >

                <img src="../assets/whatsapplogo.png" height="50" width="50"/>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-btn
                  class="ma-2"
                  icon=""
              >

                <img src="../assets/telegramlogo.png" height="50" width="50"/>
                 </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-btn
                  class="ma-2"
                  icon=""
              >

                <img src="../assets/vk-new.png" height="50" width="50"/>

                </v-btn>
            </v-col>

      </div>
      </div>
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
</style>