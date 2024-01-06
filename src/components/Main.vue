<template>
  <div class="container">
    <SearchBar />
    <WeatherInfo :weather="props.weather" />
    <!-- <p>{{ props.weather.temp }}</p> -->
  </div>
</template>
  
<script setup>
  import SearchBar from './SearchBar.vue';
  import WeatherInfo from './WeatherInfo.vue';

  const props = defineProps({
    weather: Object,
  })
  
</script>
  
<style scoped lang="scss">
  .container {
    padding: 20px;
  }
</style>
