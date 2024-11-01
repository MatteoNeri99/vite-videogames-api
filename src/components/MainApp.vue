<script>
import axios from 'axios';

import VideoGamesCard from './MainAppComponents/VideoGamesCard.vue';

export default {
    data() {
      return {
        videoGames:[],
        
      }
    },components:{
      VideoGamesCard,
     
    },methods:{

      getVideoGames(){
        axios.get('https://api.rawg.io/api/games', {
            params: {
              key:'55c0752d60214456b09ce901954f35c1',
              page_size: '50',
            
            }
          })
          .then((response) => {
            console.log(response.data.results);
            this.videoGames = response.data.results
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });  

      }

    },created(){
      this.getVideoGames();
    }
  }
</script>

<template>

  <main>

    <h1>videogames</h1>

    <div>

      <VideoGamesCard :videoGames='videoGames'/>

    </div>
    
  </main>
 
  
</template>

<style scoped>



main{

  height: 100vh;
  padding: 5rem;
  overflow: scroll;
  

  h1{
    font-family: arial, verdana, sans-serif;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    line-height: 150%;
    color: #0893e8;
    text-shadow: -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff;

  }
}

div{
  overflow: scroll;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 5rem;
 
}


</style>
