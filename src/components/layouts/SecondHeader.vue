<template>
  <div>
    <v-app-bar flat color="grey-darken-2">
      <v-container class="fill-height d-flex align-center justify-center">
        <v-btn
          v-for="({ id, title }, key) in categories"
          :key="key"
          variant="text"
        >
          <router-link :to="`category/${id}`">{{ title }}</router-link>
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "SecondHeader",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
