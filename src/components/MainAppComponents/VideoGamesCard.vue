<script>
import VideoGamesElement from './VideoGamesElement.vue';

export default {
    data() {
      return {
        videoGames:[],
        
        
      }
    },components:{
      VideoGamesElement,
     
    },props:{

      videoGames:{
        type:Array,
        required:true,

      }
        
    }
  }
</script>

<template>
  <section>
    <article v-for="videoGame in videoGames" >
     
     <VideoGamesElement   :videoGame="videoGame"/>
     
       
   </article>

  </section>
    


</template>

<style scoped>
section{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
}
article{
  width: calc((100% / 5) - 2rem);
  
}

</style>