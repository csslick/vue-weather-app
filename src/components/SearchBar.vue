<template>
  <div class="search-bar">
    <form @submit.prevent>
      <div class="form-group">
        <input 
          @input="inputText = $event.target.value"
          type="search" placeholder="지역을 입력해 주세요">
        <button 
          @click="
            $store.commit('changeCity', inputText);
            $store.dispatch('getWeather');
          "
          >
          <font-awesome-icon class="icon" icon="magnifying-glass" />
        </button>
        <!-- <p>{{ $store.state.city }}</p> -->
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref, onUpdated } from 'vue';
  
  const inputText = ref('seoul');
  // const emits = defineEmits(['onSearchCity']);

  // function onSearchCity() {
  //   console.log('click 전송', inputText.value)
  //   emits('onSearchCity', inputText.value);
  // }

</script>

<style lang="scss" scoped>
  .search-bar {
    padding: 0 20px;
    border-radius: 40px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 20px;
    color: #333;
  
    form {
      .form-group {
        display: flex;
        input {
          width: 100%;
          border: none;
          padding: 0.6em 0;
          font-size: 18px;
          outline: none;
        }
        button {
          background: transparent;
          border: none;
          &:hover { cursor: pointer; }
          .icon { font-size: 24px; }
        }
      }
    }
  }
</style>