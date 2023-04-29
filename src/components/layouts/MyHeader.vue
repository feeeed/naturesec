  <template>
    <v-app-bar flat color="green">
      <v-container class="fill-height d-flex align-center">
        <v-avatar
            image="https://mobimg.b-cdn.net/v3/fetch/82/821db7ef6608c4e5bb62fb776722550c.jpeg"
            size="39"

        ></v-avatar>
        <h3> NatureSecure</h3>
        <v-spacer></v-spacer>

        <v-btn
            v-for="link in links"
            :key="link"
            variant="text"
        >
          {{ link }}
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
        'Updates',
      ],
    }),
}
</script>

<style lang="scss" scoped>

</style>