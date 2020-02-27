<template>
<div class="container">
  <div>
    All the matches will be held online, and it’s predicted that LPL returning to air and broadcasting scrims between LPL teams will serve as a test run to hold official matches online.
    It’ll be a chance to check out how players will perform after a long hiatus, and how the LPL teams are preparing for their matches over this long hiatus.
    These practice matches are scheduled so that they won’t hinder the teams’ practice schedules, and according to sources.
    <child-component />
  </div>
</div>
</template>
<script type="text/javascript">
  import ChildComponent from './ChildComponent.vue'
  export default {
    components : {
      'child-component' : ChildComponent
    }
  }
</script>
<style scope>
  div{
    background: #00897b;
    color: white;
    padding: 10px 20px;
  }
</style>
