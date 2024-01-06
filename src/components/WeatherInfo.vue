<template>
    <div class="weather-info">
      <div class="icon">{{ props.weather.icon }}</div>
      <div class="temp">{{ props.weather.temp }}</div>
      <div class="text">{{ props.weather.text }}</div>
      <div class="location">{{ props.weather.location }}</div>
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
  }
</style>