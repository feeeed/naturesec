<template>
    <div class="welcome">
        <v-main>
          <v-container>
            <v-row class="flex-wrap-reverse" justify="center">
                <v-col
                cols="10"
                lg="7"
                md="7"
                sm="6"
                class="d-flex flex-column justify-center">
                    <div class="title">
                        <v-sheet class>
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
                        class="mx-5"
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
                </v-col>
                <v-col 
                cols="10"
                md="4"
                lg="4"
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
          </v-container>
            <v-container fluid class="my-10 px-16 d-none d-sm-inline-block">

            <v-row
            justify="center"
            >
                <v-col
                    cols="10"
                    sm="5">
                    <v-card
                        class="text-center d-flex flex-column align-center justify-center bg-grey-lighten-4"
                        variant="flat"
                        rounded="xl"
                        min-height="400"
                    >
                    <v-card-item>
                        <div class="text-h6 font-weight-medium">
                            Наш рейтинг среди клиентов
                        </div>

                        
                    </v-card-item>
                    <v-card-item>
                        <v-rating
                            v-model="rating"
                            color="light-green-accent-4"
                            density="comfortable"
                            readonly
                            half-increments
                        >
                    </v-rating>
                    <div class="px-3">{{ totalRating }} оценок</div>

                    </v-card-item>
                    
                    </v-card>
                </v-col>
                <v-col
                    cols="10"
                    sm="5">
                    <v-card
                        class="text-center d-flex flex-column align-center justify-center bg-grey-lighten-4"
                        variant="flat"
                        rounded="xl"
                        min-height="400"
                    >
                    <v-card-item>
                        <div class="text-h4">
                            Нам <span class="text-light-green-accent-4">20</span> лет
                        </div>
                        <div class="my-3 text-h6 font-weight-medium text-medium-emphasis">
                            Значительный опыт в области создания экологических проектов.
                        </div>
                    </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
            <v-row
            justify="center"
            >
                <v-col
                cols="10"
                sm="8"
                >
                    <v-card
                        class="text-center d-flex flex-column align-center justify-center bg-grey-lighten-4"
                        variant="flat"
                        rounded="xl"
                        min-height="400"
                    >
                    <v-card-item>
                        <div class="text-h4">
                            Собственный информационный портал
                        </div>
                        <v-icon
                        icon="mdi-card-bulleted-settings"
                        size="85"
                        class="my-5"
                        >
                        </v-icon>
                        <div class="my-3 text-h6 font-weight-medium text-medium-emphasis">
                            Новости, информация, документы.
                        </div>
                    </v-card-item>
                    </v-card>
                </v-col>
                <v-col
                    cols="10"
                    sm="2">
                    <v-card
                        class="text-center d-flex flex-row align-center justify-center bg-black"
                        variant="flat"
                        rounded="xl"
                        min-height="400"
                    >
                    <v-card-item>
                    <div class="text-h5">
                        Перейти
                        </div>
                    </v-card-item>
                    <v-card-actions

                    >
                        <v-btn 
                        density="compact" 
                        variant="outlined"
                        icon="mdi-arrow-right-bold"
                        size="x-large"
                        color="light-green-accent-4"
                        ></v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
          <v-container class="d-inline-block d-sm-none">
            <mobile-title-info/>
          </v-container>
          <v-container class="d-inline-block d-sm-none">
            <mobile-title-list
            :posts="categories"
            />
          </v-container>
            <v-container fluid class="my-10 px-16 bg-grey-lighten-4 d-none d-sm-inline-block">
              <v-row class="d-flex flex-column justify-center text-center align-center">
                <v-sheet class="d-flex flex-column align-center bg-grey-lighten-4">
                  <p class="text-h4 text-xl-h3 font-weight-bold my-5 ">
                    Услуги природоохранного назначения
                  </p>
                  <p class="text-body-1 font-weight-medium text-medium-emphasis w-50 mb-5">
                    Услуги пользующееся наибольшим спросом среди наших заказчиков.
                  </p>

                </v-sheet>

              </v-row>

                <v-row>
                <TitlePostListV2
                :posts="categories"
                />
            </v-row>
            </v-container>
            
        </v-main>
    
    
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TitlePostListV2 from '@/components/layouts/TitlePostListV2.vue';
import MobileTitleList from "@/components/MobileTitleList.vue";
import MobileTitleInfo from "@/components/MobileTitleInfo.vue";
    export default {
        data:() => ({rating:4.5, totalRating:17,}),
        components:{TitlePostListV2,MobileTitleList,MobileTitleInfo},
        mounted(){
        this.fetchCategories();

    },
    computed:{
        ...mapGetters({
            categories:'categories'

        })

    },
    methods:{
        ...mapActions({
            fetchCategories:'fetchCategories'
        }),


    }
        
    }
</script>

<style scoped>



</style>