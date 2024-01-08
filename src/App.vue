<script setup>
  import { onMounted } from 'vue'; 
  import { useStore } from 'vuex'; // vuex에서 store 가져옴
  import Navbar from './components/Navbar.vue';
  import Main from './components/Main.vue';

  const store = useStore(); // store 초기화

  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    // getWeather();
    store.dispatch('getWeather')
  })

</script>

<template>
  <Navbar />
  <Main />
</template>

<style scoped>


</style>
