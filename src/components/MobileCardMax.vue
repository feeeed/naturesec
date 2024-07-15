<template>
  <v-col cols="12">
    <v-card
        variant="flat"
        @click="$router.push(`/category/${id}`)"
    >
      <div class="d-flex justify-space-between px-5 align-center">
        <div>
          <v-card-title class="text-h5"> {{ title }} </v-card-title>

        </div>
        <div>
          <v-icon
          color="light-green-accent-4"
          :icon= icon
          size="65"
          >
          </v-icon>
        </div>
      </div>
    </v-card>

  </v-col>
</template>

<script>
export default {
  name:'mobile-card-max',
  props:{
    id:{
      type: Number,
    },
    title:{
      type: String,
      default:''
    },
    description:{
      type: String,
      default:'',
    },
    icon:{
      type: String,
      default:'',
    }

  }
}
</script>

<style lang="scss" scoped>

</style>