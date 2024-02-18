<template>
        <PostCardTitleV2
        v-for="(post,key) in posts"
        :key="key"
        :_id="post._id"
        :title="post.title"
        />
        <v-col>
            <v-card
            class="mx-auto d-flex align-center justify-center"
            min-width="600"
            variant="outlined"
            height="150"
            >
                <v-card-subtitle>
                    <p class="text-h5">
                        Больше о наших услугах на отдельной странице
                    </p>
                    
                </v-card-subtitle>
            </v-card>
        </v-col>
</template>

<script>
import PostCardTitleV2 from '../PostCardTitle.V2.vue';
export default {
    components:{PostCardTitleV2},
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