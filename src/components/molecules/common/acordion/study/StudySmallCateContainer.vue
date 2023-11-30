<template>
  <div class="small-container">
    <div v-for="smallKey in smallCates">
      <div class="accordion-menu">{{smallKey.split(" ").slice(0,-1).join(" ")}}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  smallCates : Array
});
</script>

<style scoped>
.small-container {
  margin-top: 11px;
  width: 140px;
  height: 100%;
  background-color: white;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: lightgray;
  font-weight: lighter;
  font-size: small;
  padding-top: 15px;
  padding-left: 15px;
  z-index: 2;
}
.accordion-menu:hover {
  color: #ce0f0f;
}
</style>