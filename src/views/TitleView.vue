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
                            <p class="text-h4 font-weight-bold d-flex d-md-none text-light-green-accent-4">
                                Природоохранный центр
                            </p>
                            <p class="text-h4 text-xl-h1 text-light-green-accent-4 text-lg-h2 font-weight-bold d-none d-md-flex">
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
                        @click="$router.push(`/about`)"
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
                        @click="$router.push(`/categories`)"
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
                    style="width: 350px;"
                    ></v-img>    
                </div>
                </v-col>
            </v-row>
            <v-container class="my-10">
              <v-row class="d-flex flex-column justify-center text-center align-center">
                <v-sheet class="d-flex flex-column align-center">
                  <p class="text-h4 text-xl-h3 font-weight-bold mb-5">
                    Услуги природоохранного назначения
                  </p>
                  <p class="text-body-1 font-weight-medium text-medium-emphasis w-50 mb-5">
                    Услуги пользующееся наибольшим спросом среди наших заказчиков.
                  </p>

                </v-sheet>

              </v-row>

                <v-row>
                <TitlePostListV2
                :posts="servicesEk"
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
            this.fetchAllServicesEk();
        },
        computed:{
            ...mapGetters({
                servicesEk:'servicesEk',
            }),
        },
        methods:{
            ...mapActions({
                fetchAllServicesEk:'fetchAllServicesEk',
            }),
        }
        
    }
</script>

<style scoped>
.text-h1{
    color: #3ADA2A;
    
    
}

</style>