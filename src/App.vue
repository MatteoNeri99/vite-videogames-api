
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

  <HeaderApp />

  <MainApp />

 

</template>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-image:url('https://img.freepik.com/vettori-gratuito/luce-blu-astratta-zoom-velocita-tubo-su-sfondo-nero-tecnologia_1142-9980.jpg');
  overflow: hidden;
  font-family: "Teko", sans-serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  font-style: normal;
}



</style>
