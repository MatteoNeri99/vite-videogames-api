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
    <span>
      <router-link :to="{ name: 'videogame-details', params: { id: videoGame.id } }" >Mostra dettagli</router-link>
    </span>
      
  </article>

</template>

<style scoped>

article{
  width: calc((100% / 8) - 3rem);
  height: 25rem;
  margin-left: 2.5rem;
  margin-bottom: 5rem;
}
article:hover{
  border: 5px solid #1feeff;
  border-radius: 20px;
}
span{
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

a{
  border-radius: 20px;
  padding: .3rem;
  background-color: #1feeff;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}
 

</style>