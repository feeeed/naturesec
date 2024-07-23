<template>
  <div class="input123">
    <v-text-field
      :value="modelValue"
      @input="updateInput"
      density="compact"
      label="Поиск по базе"
      variant="solo"
      append-inner-icon="mdi-magnify"
      single-line
      rounded="x"
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input123 {
  padding-bottom: 16px;
}
</style>
