import Vue from 'vue'
import App from './App.vue'
//import ChildComponent from './components/ChildComponent.vue'
//import CompArticle from './components/CompArticle.vue'

Vue.config.productionTip = false

/*
component를 전역으로 사용할 경우 main.js에 등록한다.
지역으로 사용할 경우는 app.vue에 등록한다.
*/
//Vue.component('child-compenent', ChildComponent);
//Vue.component('comp-article', CompArticle);

new Vue({
  render: h => h(App),
}).$mount('#app')
