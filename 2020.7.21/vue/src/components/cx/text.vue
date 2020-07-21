<template>
  <div class="block">
    <selector1></selector1>
  </div>
</template>

<script>
  import selector1 from './selector1'
  export default {
    components:{
      selector1
    },
    data() {
      return {
        aaa: 0
      }
    },
    methods: {
      addnum(){
        this.aaa++
        console.log(this.aaa)
      },
      changevalue(e){
        // console.log(e.target.value)
        this.aaa = parseInt(e.target.value)
      }
    },
  }
</script>