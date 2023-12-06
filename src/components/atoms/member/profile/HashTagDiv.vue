<script setup>
const props = defineProps({
  value : String,
  color: String,
  backgroundColor: String
});
const sliceNameFromKeySet = (keySet)=>{
  return keySet.split(" ").slice(0, -1).join(' ');
}
</script>

<template>
  <div class="hash-tag">
    {{sliceNameFromKeySet(props.value)}}
  </div>
</template>

<style scoped>
.hash-tag {
  border-radius: 0.2rem;
  padding: 1px .2rem;
  color: v-bind('props.color');
  background: v-bind('props.backgroundColor');
  display: inline-flex;
  margin-right: 0.3rem;
}
</style>