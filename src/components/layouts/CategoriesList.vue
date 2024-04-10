<template>
    <div>
        <v-row class="mx-16 my-10">
        <CategoryRow
        v-for="(category,key) in categories"
        :key="key"
        :title="category.title"
        :icon="category.icon"
        :description="category.description"
        :servicesEk="category.servicesEk"
        >


        </CategoryRow>
    </v-row>


    </div>
</template>

<script>
import CategoryRow from '../CategoryRow.vue';
export default {
    components:{CategoryRow},
    props:{
        categories:{
            type:Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>