<template>
  <v-main>
    <v-container>
      <CategoryPrew
        :title="category.title"
        :servicesEk="category.servicesEk"
        :description="category.description"
      >
      </CategoryPrew>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CategoryPrew from "@/components/CategoryPrew.vue";
export default {
  components: { CategoryPrew },
  mounted() {
    this.fetchCategory(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      category: "category",
    }),
  },
  methods: {
    ...mapActions({
      fetchCategory: "fetchCategory",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
