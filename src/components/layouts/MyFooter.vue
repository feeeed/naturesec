<template>
    <v-footer class="flex-column bg-blue-grey-lighten-2">
      <v-row justify="center" no-gutters>
        <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
            @click="$router.push(link.value)"
        >
          {{ link.name }}


        </v-btn>
      </v-row>
      <v-row>
        <v-col>
          <v-img
          :src="require('/src/assets/WDOMcutdq1U.webp')"
          width="200"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-sheet class="d-flex flex-column" width="200px" color="blue-grey-lighten-2">
            Телефоны:
            <li>+7 (3812) 510-464</li>
            <li>+7 (3812) 377-211</li>
            <li>+7 (3812) 373-115</li>
            <li>+7 (3812) 510-050</li>
          </v-sheet>

        </v-col>
        <v-col>
          Эл.почта:
          <a href="mailto:naturesecur@mail.ru" style="color: black">naturesecur@mail.ru</a>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="pt-8">
          <img src="../../assets/logov2.png" height="65" width="75"/>
        </v-col>
      </v-row>

    </v-footer>

</template>

<script>
export default {
  data: () => ({
    links: [
      {value:'/',name:'Главная'},
      {value:'/main',name:'Информация'},
      {value:'/about',name:'Контакты'},
      {value:'/contacts',name:'О нас'},

    ],
  }),
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>