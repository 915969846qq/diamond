<template>
  <div class="main clearfix">
      <searchfluor></searchfluor>
      <searchLetter></searchLetter>
  </div>
</template>

<script>
import searchfluor from '../searchfluor';
import searchLetter from '../searchLetter'
export default {
    components:{
        searchLetter,
        searchfluor
    }
}
</script>

<style scoped>
  .clearfix::after {
  content: "";
  display: block;
  clear: both;
  
}
</style>