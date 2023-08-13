  <template>
    <v-app-bar
        flat color="#b1ddb6"
    >
      <v-container class="fill-height d-flex align-center">
        <v-avatar
            image="https://mobimg.b-cdn.net/v3/fetch/82/821db7ef6608c4e5bb62fb776722550c.jpeg"
            size="39"
        ></v-avatar>
        <v-btn
            variant="text"
            @click="$router.push(`/`)"
        > NatureSecure</v-btn>
        <v-spacer></v-spacer>
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
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'О нас',
      ],
    }),
}
</script>

<style lang="scss" scoped>

</style>