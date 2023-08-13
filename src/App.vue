<template>
    <v-app>
    <my-header/>
    <router-view/>
      </v-app>
</template>
<script>
import MyHeader from "@/components/layouts/MyHeader.vue";
import{mapActions,mapGetters} from "vuex";

export default {
  components: {MyHeader},
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
