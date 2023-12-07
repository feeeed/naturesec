<template>
  <div>
    <v-card
        class="mx-11 my-4"
        max-width="344"
    >
      <v-img

          :src="img"
          height="200px"
          width="200px"
          cover
      >
      </v-img>

      <v-card-title>
        {{title}}
      </v-card-title>

      <v-card-subtitle>
        {{subtitle}}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name:'EmployeeCard.vue',
  props:{
    title:{
      type:String,
      default:''
    },
    img:{
      type:String,
      default: ''
    },
    subtitle:{
      type:String,
      default:''
    }
  }

}
</script>

<style lang="scss" scoped>

</style>