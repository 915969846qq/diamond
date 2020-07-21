<template>
  <div id="app">
      <topHeadr></topHeadr>
      <router-view></router-view>
      <bootomfooter></bootomfooter>
  </div>     
</template>
 

<script>        

//引入

import topHeadr from './components/Team/topHeadr'
import bootomfooter from './components/Team/bottomfooter'


export default {  
  name: 'App',              
   components:{     
     topHeadr:topHeadr,  
     bootomfooter:bootomfooter     
  },     
  data(){
    return {
      
    }
  },
  methods: {
    
  }
}                             
</script> 

<style>   
@import "assets/animate.css";                            
*{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}
a{
  text-decoration: none;
}
#app {
  width:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
    color: #333;
    font-size: 12px;
    font-family: Arial, "宋体";
  /* margin-top: 60px; */               
}
</style>        

