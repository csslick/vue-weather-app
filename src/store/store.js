import { createStore } from "vuex";

// Vuex store 설정
export default createStore({
  state: {
    weather: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'city',
    },
    city: 'Seoul', // API에 요청하는 지역명(검색 요청마다 변경됨)
  },
  mutations: {
    changeCity (state, payload) {
      state.city = payload;
    },
    setWeatherData (state, payload) {
      state.weather.icon = payload.weather[0].icon;
      state.weather.temp = payload.main.temp;
      state.weather.text = payload.weather[0].description;
      state.weather.location = payload.sys.country;
      state.weather.city = payload.name;
    }
  },
  actions: {
    // 액션(actions)
    getWeather(context) {
      const API_KEY = 'e11462160015cffa69954c9f67741b7b';
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.city}&appid=${API_KEY}`
  
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          context.commit('setWeatherData', data);
        })
        .catch(err => {
          alert('날씨 데이터 요청에 실패했습니다.', err);
        })
    }
  },
});