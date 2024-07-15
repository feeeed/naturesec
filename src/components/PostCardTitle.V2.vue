<template>
    <v-col
        cols="12"
        xl="3"
        lg="3"
        md="3"
    >
      <v-hover v-slot="{ isHovering,props }">
        <v-card
        class="mx-auto text-center d-flex flex-column align-center justify-center bg-white" v-bind="props"
        min-width="200"
        min-height="200"
        variant="flat"
        rounded="xl"

        >
        <v-icon
        color="light-green-accent-4"
        :icon="icon"
        size="85"
        >
        </v-icon>
        <v-card-subtitle
        class="py-4">
        {{ title }}

        </v-card-subtitle>
          <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
          >
            <v-btn
                variant="flat"
                @click="$router.push(`/category/${id}`)"

            >Подробнее</v-btn>

          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
</template>

<script>
    export default {
    name:"PostCardTitleV2",
    props:{
        id:{
            type: Number,
        },
        title:{
            type: String,
            default:''
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