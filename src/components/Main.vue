<template>
  <div class="container">
    <SearchBar />
    <WeatherInfo />
  </div>
</template>
  
<script setup>
  import SearchBar from './SearchBar.vue';
  import WeatherInfo from './WeatherInfo.vue';

  // const props = defineProps({
  //   weather: Object,
  // })
  // const emits = defineEmits(['onSearchCity'])

  // function onSearchCity(city) {
  //   console.log('main: ', city);
  //   emits('onSearchCity', city);
  // }
  
</script>
  
<style scoped lang="scss">
  .container {
    padding: 20px;
    background: #fff;
    height: calc(100vh - 66px);
  }
</style>
