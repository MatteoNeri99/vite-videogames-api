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
              page_size: 50
            
            }
          })
          .then((response) => {
            console.log(response.data.results);
            this.videoGames = response.data.results
            console.log(this.videoGames);
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

      <VideoGamesCard :videoGames='videoGames'/>
    
  </main>
 
  
</template>

<style scoped>

main{
  background-color: #292929;
  color: white;
}

</style>
