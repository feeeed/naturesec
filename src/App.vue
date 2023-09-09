<template>
    <v-app>
    <my-header/>
    <router-view/>
      <my-footer/>
      </v-app>
</template>
<script>
import MyHeader from "@/components/layouts/MyHeader.vue";
import{mapActions,mapGetters} from "vuex";
import MyFooter from "@/components/layouts/MyFooter.vue";

export default {
  components: {MyHeader, MyFooter},
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
