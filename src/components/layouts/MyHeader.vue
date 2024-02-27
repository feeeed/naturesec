  <template>
    <v-navigation-drawer v-model="drawer" temporary location="top">
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
            @click="$router.push(`/`)"
            prepend-icon="mdi-home"
            title="Главная"
            value="home"

        ></v-list-item>
        <v-list-item
            @click="$router.push(`/main`)"
            prepend-icon="mdi-information"
            title="Информация"
            value="home"
        ></v-list-item>
        <v-list-item
            @click="$router.push(`/contacts`)"
            prepend-icon="mdi-home-map-marker"
            title="Контакты"
            value="about"
        ></v-list-item>
        <v-list-item
            @click="$router.push(`/about`)"
            prepend-icon="mdi-contacts"
            title="О нас"
            value="contacts"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        flat color="#ffffff"
        height="80"
    >
      <v-container class="fill-height d-flex align-center text-center justify-center">
        <v-btn
        icon="mdi-menu"
        @click.stop="drawer = !drawer"
        >
        </v-btn>

        <v-spacer></v-spacer>
        <div class="d-none d-sm-flex">
        <v-btn
        variant="text"
        @click="$router.push(`/`)"
        >
        Главная
        </v-btn>
        <v-btn
            variant="text"
            @click="$router.push(`/about`)"
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
            @click="$router.push(`/contacts`)"
        >
          Контакты
        </v-btn>
      </div>

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