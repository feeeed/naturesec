<template>
        <PostCardTitleV2
        v-for="(post,key) in posts"
        :key="key"
        :id="post.id"
        :title="post.title"
        :icon="post.icon"
        />
        <v-col
        cols="12"
        sm="6"
        >
        <v-hover v-slot="{ isHovering, props }">
            <v-card
            class="mx-auto d-flex align-center justify-center bg-white"
            v-bind="props"
            min-height="200"
            variant="flat"
            rounded="xl"
            >
                <v-card-subtitle>
                    <p class="text-h5">
                        Больше о наших услугах на отдельной странице
                    </p>

                    
                </v-card-subtitle>
                <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
          >
            <v-btn
                variant="flat"
                @click="$router.push(`/categories`)"

            >Подробнее</v-btn>

          </v-overlay>
            </v-card>
        </v-hover>
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

<style scoped>

</style>