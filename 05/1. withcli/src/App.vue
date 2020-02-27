<template>
  <div id="app">
    <our-header />  <!-- --3 -->
    <our-body />
    <our-footer />
  </div>
</template>

<script>
import OurHeader from './components/OurHeader.vue' // --1
import OurBody from './components/OurBody.vue'
import OurFooter from './components/OurFooter.vue'

export default {
  name: 'App',
  components:
    { OurHeader,OurBody,OurFooter }   // --2
}
</script>

/*
1. 컴포넌트를 사용하려면 import 키워드를 이용해 각각의 컴포넌트를 App.vue에서 사용할 수 있도록 한다.
2. components 프로퍼티에 컴포넌트를 등록한다.
3. 태그형태로 컴포넌트를 추가한다.
 */
