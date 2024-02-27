<template>
    <v-app>
    <my-header/>
    <router-view/>
      <nt-footer/>
      </v-app>
</template>
<script>
import MyHeader from "@/components/layouts/MyHeader.vue";
import NtFooter  from "@/components/layouts/NtFooter.vue";

export default {
  components: {MyHeader, NtFooter},

}
</script>
<style>

</style>
