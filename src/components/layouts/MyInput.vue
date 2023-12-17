<template>
  <div class="input123">
  <v-text-field
      :value="modelValue"
      @input="updateInput"
      density="compact"
      variant="solo"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
  ></v-text-field>
  </div>
</template>

<script>
export default {
  name:'my-input',
  props:{
    modelValue:[String,Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue',event.target.value)
    }
}
}
</script>

<style scoped>
.input123{
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>