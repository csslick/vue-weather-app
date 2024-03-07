<script setup>
  import { onMounted } from 'vue'; 
  import { useStore } from 'vuex'; // vuex에서 store 가져옴
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/Main.vue';
  import About from './components/About.vue';

  const store = useStore(); // store 초기화

  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    // getWeather();
    store.dispatch('getWeather')
  })

</script>

<template>
  <Navbar />
  <!-- $store.state.toggle이 false이면 Main 컴포넌트를 보여줌 -->
    <div v-if="$store.state.toggle">
      <About />
    </div>
    <div v-else>
      <MainComp />
    </div>
</template>

<style scoped>

</style>
