<template>
    <div>
        <CategoryRow
        v-for="(category,key) in categories"
        :key="key"
        :title="category.title"
        :description="category.description"
        :servicesEk="category.servicesEk"
        >


        </CategoryRow>


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