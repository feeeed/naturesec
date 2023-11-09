<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="mx-11 my-4" width="344" height="100" v-bind="props">
        <v-img
            :src="img"
        ></v-img>

        <v-overlay
            :model-value="isHovering"
            contained
            scrim="#036358"
            class="align-center justify-center"
        >
          <h2 class="text-h6 text-primary">{{ title }}</h2>
          {{subtitle}}
        </v-overlay>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name:'CompaniesCard',
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