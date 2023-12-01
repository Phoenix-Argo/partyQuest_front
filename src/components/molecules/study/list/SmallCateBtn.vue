<template>
  <button class="small-cate-btn">
    {{getSmallCateName()}}
  </button>
</template>

<script setup>
let props = defineProps({
  smallCateKey: String
});
const getSmallCateName = () => {
  return props.smallCateKey.split(' ').slice(0, -1).join(' ');
};
</script>

<style scoped>
.small-cate-btn {
  border: solid 1px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background: white;
  cursor: pointer;
}
.small-cate-btn:hover {
  z-index: 2;
  background: rgba(100, 100, 100, 0.3);
}
</style>