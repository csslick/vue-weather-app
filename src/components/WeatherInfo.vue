<template>
    <div class="weather-info">
      <div class="icon">
        <img 
          :src="`https://openweathermap.org/img/wn/${$store.state.weather.icon}@2x.png`" 
          alt="icon">
      </div>
      <div class="temp">{{ ($store.state.weather.temp - 273.15).toFixed(1) }}&deg;</div>
      <div class="text">{{ $store.state.weather.text }}</div>
      <div class="location">
        {{ $store.state.weather.city }},
        {{ $store.state.weather.location }}
      </div>
    </div>
</template>
  
<script setup>
  // const props = defineProps({
  //   weather: Object,
  // })
  
</script>
  
<style lang="scss" scoped>
  .weather-info {
    padding: 20px;
    & > div {
      margin-bottom: 20px;
      padding: 20px;
      // border: 1px solid #ccc;
    }
    .icon img {
      width: 140px;
    }
    .temp {
      font-size: 4em;
    }
    .text {
      font-size: 2em;
    }
  }
</style>