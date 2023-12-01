<template>
  <div class="small-cate-btn">
    {{smallCateKey.split(" ").slice(0,-1).join(" ")}}
  </div>
</template>

<script setup>
defineProps({
  smallCateKey : String
})
</script>

<style scoped>
.small-cate-btn {
  border: solid 1px gray;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;

}
</style>