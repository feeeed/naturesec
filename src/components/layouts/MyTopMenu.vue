<template>
  <div class="topSidebar">
    <div
      class="contentItem"
      v-for="(item, key) in content"
      :key="key"
      :name="item.name"
      :value="item.value"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
