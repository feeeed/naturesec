<template>
    <v-app>
    <my-header/>
      <second-header :categories="categories"/>
    <router-view/>
      </v-app>
</template>
<script>
import MyHeader from "@/components/layouts/MyHeader.vue";
import SecondHeader from "@/components/layouts/SecondHeader.vue";
import{mapActions,mapGetters} from "vuex";

export default {
  components: {SecondHeader, MyHeader},
  mounted() {
    this.fetchCategories()
  },
  methods:{
    ...mapActions({
      fetchCategories: 'fetchCategories',
    })
  },
  computed:{
    ...mapGetters({
      categories:'categories',
    })
  }

}
</script>
<style>

</style>
