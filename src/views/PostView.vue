<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            sm="8"
        >
          <v-sheet
              min-height="70vh"
              rounded="lg"
          >
            <h1 class="text-center pa-4">
              el·ee·mos·y·nar·y
            </h1>
            <div class="pa-sm-6">
              <h1>Это страница поста с ID = {{ $route.params.id }}</h1>
              <br>
              dfsdf
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>






</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>

</style>