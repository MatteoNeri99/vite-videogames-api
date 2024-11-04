<script>
import VideoGamesElement from './VideoGamesElement.vue';

export default {
    data() {
      return {
       
        
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

  <article v-for="videoGame in videoGames" >
     
    <VideoGamesElement   :videoGame="videoGame"/>
     
       
  </article>

</template>

<style scoped>

article{
  width: calc((100% / 8) - 3rem);
  height: 20rem;
  margin-left: 2.5rem;
  margin-bottom: 5rem;
}
article:hover{
  border: 5px solid #1feeff;
  border-radius: 20px;
}


</style>