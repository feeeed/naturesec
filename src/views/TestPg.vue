<template>
    <div class="welcome">
        <v-main>
            <v-row class="flex-wrap-reverse" justify="center">
                <v-col
                cols="10"
                sm="6"
                class="d-flex flex-column justify-center">
                    <div class="title">
                        <v-sheet class="mt-16">
                            <p class="text-h4 font-weight-bold d-flex d-md-none" color="#3ADA2A">
                                Природоохранный центр
                            </p>
                            <p class="text-h4 text-xl-h1 text-lg-h2 font-weight-bold d-none d-md-flex" color="#3ADA2A">
                                Природоохранный центр
                            </p>
                        </v-sheet>                        
                    </div>
                    <div class="subtitle mr-16 my-8">
                        <v-sheet>
                            <p class="text-body-1 font-weight-medium text-medium-emphasis">
                                Вот уже на протяжение двух десятилетий, 
                        взаимодействуя с ведущими проектными и научными 
                        организациями нашего региона, 
                        «Природоохранный центр» помогает успешно 
                        решать задачи любого уровня сложности предприятиям 
                        нашей области. 
                            </p>
                            
                        </v-sheet>
                    </div>
                    <div class="buttons-social d-flex align-center">
                        <v-btn 
                        density="compact" 
                        variant="outlined" 
                        icon="mdi-plus" 
                        size="x-large"
                        ></v-btn>
                        <v-btn 
                        density="compact" 
                        variant="outlined" 
                        icon="mdi-plus" 
                        size="x-large" 
                        class="mx-10"
                        ></v-btn>
                        <v-btn 
                        density="compact" 
                        variant="outlined" 
                        rounded="" 
                        size="x-large" 
                        min-width="120"
                        class="text-none font-weight-bold"
                        >Больше о нас</v-btn>
                    </div>

                    <div class="button-continue mt-16">
                        <v-btn
                        density="compact"
                        variant="flat"
                        rounded=""
                        color="#3ADA2A"
                        min-width="127"
                        size="x-large"
                        class="text-none font-weight-bold text-white"
                        >
                            Услуги
                        </v-btn>
                    </div>
                </v-col>
                <v-col 
                cols="10"
                sm="4"
                class="d-flex justify-center flex-grow-1 flex-shrink-0 ">
                <div class="d-none d-md-flex my-16">
                    <v-img
                    :src="require('../assets/image.webp')" 
                    style="width: 600px; height: 600px;"
                    ></v-img>
                </div>
                <div class="d-flex d-md-none flex-grow-0">
                    <v-img 
                    :src="require('../assets/image.webp')" 
                    style="width: 350px; height: px;"
                    ></v-img>    
                </div>
                </v-col>
            </v-row>
            <v-container>
                <v-row>
                <TitlePostListV2
                :posts="sortedPosts"
                />
            </v-row>
            </v-container>
            
        </v-main>
    
    
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TitlePostListV2 from '@/components/layouts/TitlePostListV2.vue';
    export default {
        components:{TitlePostListV2},
        mounted(){
            this.fetchPosts();
        },
        computed:{
            ...mapGetters({
                sortedPosts:'sortedPosts'
            }),
        },
        methods:{
            ...mapActions({
                fetchPosts:'fetchPosts',
            })
        }
        
    }
</script>

<style scoped>
.text-h1{
    color: #3ADA2A;
    
    
}
.text-h4{
    color: #3ADA2A;
}

</style>