<script setup>
  import { ref, onMounted } from 'vue';
  import Navbar from './components/navbar.vue';
  import Main from './components/Main.vue';

  // 날씨 데이터 상태변수
  const weather = ref({
    icon: 'icon',
    temp: 0,
    text: 'text',
    location: 'location',
    city: 'Seoul',
  })

  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    const API_KEY = 'e11462160015cffa69954c9f67741b7b';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weather.value.city}&appid=${API_KEY}`

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        weather.value.icon = data.weather[0].icon;
        weather.value.temp = data.main.temp;
        weather.value.text = data.weather[0].description;
        weather.value.location = data.sys.country;
        weather.value.city = data.name;
        console.log(weather.value);
      })
      .catch(err => {
        alert('날씨 데이터 요청에 실패했습니다.', err);
      })
  })

</script>

<template>
  <Navbar />
  <Main :weather="weather" /> <!-- 날씨 데이터 전송 -->
</template>

<style scoped>


</style>
