<template>
    <v-row>
    <v-col>
    <v-sheet>
        <p class="text-h5 font-weight-bold">
            {{ title }}
        </p>
        <p>
           {{ description }} 
        </p>
    </v-sheet>  
    </v-col>
    </v-row>
    <v-row>
    <v-col
    cols="12"
    xl="4"
    sm="5"
    xs="10"
    class="d-flex"
    v-for="(services,key) in servicesEk"
    :key="key"
    :id="services.id"
    >
    <v-card
    height="200"
    width="400"
    rounded="xl"
    variant="outlined"
    class="mr-10"
    >
    <v-card-item>
        <v-card-title>
            {{ services.title }}
           
        </v-card-title>
        <v-card-subtitle>
            {{ services.description }}
           

        </v-card-subtitle>
        <v-btn 
                    density="compact" 
                    variant="outlined" 
                    rounded="" 
                    size="x-large" 
                    min-width="120"
                    class="text-none font-weight-bold"
                    @click="$router.push(`/service/${services.id}`)"
                    >Подробнее</v-btn>


    </v-card-item>
    </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
name:'CategoryRow',
props:{
    title:{
        type: String,
        default:''
    },
    description:{
        type: String,
        default:''
    },
    servicesEk:{
        type:Array,
        required:true
    }


}
}
</script>

<style lang="scss" scoped>

</style>