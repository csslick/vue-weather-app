<template>
    <div class="weather-info">
      <div class="icon">
        <img 
          :src="`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`" 
          :alt="`${weather.text}`">
      </div>
      <div class="temp">{{ (props.weather.temp - 273.15).toFixed(1) }}&deg;</div>
      <div class="text">{{ props.weather.text }}</div>
      <div class="location">
        {{ props.weather.city }},
        {{ props.weather.location }}
      </div>
    </div>
</template>
  
<script setup>
  const props = defineProps({
    weather: Object,
  })
  
</script>
  
<style lang="scss" scoped>
  .weather-info {
    padding: 20px;
    & > div {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
    }
    .temp {
      font-size: 2em;
    }
  }
</style>