<template>
  <div class="container">
    <SearchBar 
      @onSearchCity="onSearchCity" 
    />
    <WeatherInfo :weather="props.weather" />
  </div>
</template>
  
<script setup>
  import SearchBar from './SearchBar.vue';
  import WeatherInfo from './WeatherInfo.vue';

  const props = defineProps({
    weather: Object,
  })
  const emits = defineEmits(['onSearchCity'])

  function onSearchCity(city) {
    console.log('main: ', city);
    emits('onSearchCity', city);
  }
  
</script>
  
<style scoped lang="scss">
  .container {
    padding: 20px;
  }
</style>
