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
        >
          {{ link }}
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
        <v-col>
          <img src="../../assets/mylogo2.png" height="89" width="89"/>
        </v-col>
      </v-row>

    </v-footer>

</template>

<script>
export default {
  data: () => ({
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
  }),
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>