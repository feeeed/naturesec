<template>
  <v-main>
    <v-container>
      <CategoriesList :categories="categories"> </CategoriesList>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CategoriesList from "@/components/layouts/CategoriesList.vue";
export default {
  components: { CategoriesList },
  mounted() {
    this.fetchCategories();
  },
  computed: {
    ...mapGetters({
      categories: "categories",
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: "fetchCategories",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
