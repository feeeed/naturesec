  <template>
    <v-navigation-drawer v-model="drawer" temporary location="top">
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
            @click="$router.push(`/`)"
            prepend-icon="mdi-view-dashboard"
            title="Главная"
            value="home"

        ></v-list-item>
        <v-list-item
            @click="$router.push(`/main`)"
            prepend-icon="mdi-view-dashboard"
            title="Информация"
            value="home"
        ></v-list-item>
        <v-list-item
            @click="$router.push(`/about`)"
            prepend-icon="mdi-forum"
            title="Контакты"
            value="about"
        ></v-list-item>
        <v-list-item
            @click="$router.push(`/contacts`)"
            prepend-icon="mdi-forum"
            title="О нас"
            value="contacts"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        flat color="#ffffff"
    >
      <v-container class="fill-height d-flex align-center text-center justify-center">
        <v-btn
            @click.stop="drawer = !drawer"
        >
          <img src="../../assets/WDOMcutdq1U.png" height="45" width="100"/>
        </v-btn>


        <v-btn
            variant="text"
            @click="$router.push(`/`)"
        > Природоохранный центр</v-btn>
        <v-spacer></v-spacer>
        <v-btn
            variant="text"
            @click="$router.push(`/contacts`)"
        >
          О нас
        </v-btn>
        <v-btn
            variant="text"
            @click="$router.push(`/main`)"
        >
          Информация
        </v-btn>

        <v-btn
            variant="text"
            @click="$router.push(`/about`)"
        >
          Контакты
        </v-btn>


      </v-container>
    </v-app-bar>
  </template>

<script>
  export default {
    data(){
      return{
        drawer:null,
      }
    },
}
</script>

<style lang="scss" scoped>

</style>