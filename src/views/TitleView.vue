<template>
  <div class="welcome">
    <v-main class="bg-grey-lighten-3">
      <div class="image-welcome">
        <img src="./../assets/welcomeimg.png">
      </div>
      <v-container>
        <v-row class="align-center text-center justify-center">
          <div class="text-block-welcome">
            <h2 class="text-h5 font-weight-black py-4 text-black">Услуги природоохранного назначения</h2>
          </div>
        </v-row>
        <v-row>
          <v-col>
            <v-sheet
                class="d-flex  flex-column justify-center flex-wrap  mx-auto px-4 bg-green-lighten-3 text-medium-emphasis"
                height="100%"
                rounded
                max-width="800"
                width="100%"
                elevation="4"
            >
              <div class="px-7 py-4">
              <ul>
                <li>Предоставление специализированной гидрометеорической информации</li>
                <li>Разработка проекта зоны санитарной охраны водозаёма</li>
                <li>Разработка и согласование проекта НДС, получение на право пользвоаться водным объектом, договора водопользования</li>
                <li>Разработка проекта санитарно-защитной зоны</li>
                <li>Кадастровые работы, разработка тектового и графического описания сантитарно-защитной зоны</li>
                <li>Разработка пояснительной записки к мероприятиям в периоды неблагоприятных метеорологических условий</li>
                <li>Разработка и согласование проекта предельно-допустимых выбросов</li>



              </ul>
              </div>

            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet
                class="d-flex  flex-column justify-center flex-wrap  mx-auto px-4 bg-green-lighten-3 text-medium-emphasis"
                height="100%"
                rounded
                max-width="800"
                width="100%"
                elevation="4"
            >
              <div class="px-7 py-4">
                <ul>
                  <li>Оформление заявки о постановке на государственный учёт объекта, оказывающего негативное воздействие на окружающую среду</li>
                  <li>Заполнение Декларации о плате за негативное воздействие на окружающую среду</li>
                  <li>Разработка и согласование проекта нормативов образования отходов и лимитов на их размешение
                    ,разработка паспорта опасного отхода</li>
                  <li>Оформление отчётов по природопользвоанию, 2тп (воздух),(отходы),(водхоз), отчёт МСП, контроль
                    выбросов, технический отчёт, расчёт выбросов</li>
                  <li>Составление программы производственного экологического контроля</li>
                  <li>Экологический аудит</li>
                  <li>Комплексное экологическое обслуживание</li>

                </ul>
              </div>
            </v-sheet>
          </v-col>


        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style>
.text-block-welcome{
  align-items: center;
  text-align: center;
}
.list-block-welcome{
  padding-left: 45px;
  padding-right: 45px;

}
.image-welcome>img{
  max-width: 100%;
}

</style>