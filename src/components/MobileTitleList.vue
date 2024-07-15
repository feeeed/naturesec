<template>
  <v-row class="d-flex flex-column">
    <v-sheet class="d-flex flex-column text-center">
      <p class="text-h5 font-weight-bold my-5 ">
        Услуги природоохранного назначения
      </p>
      <p class="text-body-1 font-weight-medium text-medium-emphasis mb-5">
        Услуги пользующееся наибольшим спросом среди наших заказчиков.
      </p>

    </v-sheet>
    <MobileCardMax
        v-for="(post,key) in posts"
        :key="key"
        :id="post.id"
        :title="post.title"
        :icon="post.icon"

    />

  </v-row>
</template>

<script>
import MobileCardMax from "@/components/MobileCardMax.vue";
export default {
  name:'mobile-title-list',
  components:{MobileCardMax},
  props:{
    posts:{
      type: Array,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>

</style>