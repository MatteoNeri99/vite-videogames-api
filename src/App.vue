
<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';



export default {
    data() {
      return {
        
      }
    }, components:{
      HeaderApp,
      MainApp,
     
    }
  }
</script>

<template>

  <HeaderApp/>

  <MainApp/>

 

</template>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

</style>
