<template>
    <v-col>
        <v-card
        class="mx-auto text-center" v-bind="props"
        min-width="300"
        variant="outlined"
        

        >
        <v-icon
        color="green"
        icon="mdi-tree-outline"
        size="100"
        >
        </v-icon>
        <v-card-subtitle
        class="py-4">
        {{ title }}

        </v-card-subtitle>

        </v-card>
    </v-col>
</template>

<script>
    export default {
    name:"PostCardTitleV2",
    props:{
        _id:{
            type: String,
        },
        title:{
            type: String,
            default:''
        }

    }
        
    }
</script>

<style lang="scss" scoped>

</style>