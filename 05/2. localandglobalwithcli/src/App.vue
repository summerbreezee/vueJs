<template>
  <div id="app">
    <child-component />
    <comp-article />
  </div>
</template>


<script type="text/javascript">
import ChildComponent from './components/ChildComponent.vue'
import CompArticle from './components/CompArticle.vue'

  export default {
    components:{
      'child-component' : ChildComponent,
      'comp-article' : CompArticle
    }
  }
</script>
