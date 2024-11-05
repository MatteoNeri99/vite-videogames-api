<script>
import axios from 'axios';

export default {
    props: ['id'],  // Riceve l'ID come prop dalla route
    data() {
      return {
        videoGame:{},
       
        
        
      }
    },methods:{
        getVideoGame(){
        axios.get(`https://api.rawg.io/api/games/${this.id}?key=55c0752d60214456b09ce901954f35c1`)
        
        //   params: {
        //     key:'55c0752d60214456b09ce901954f35c1',
        //     // {id}:this.id
            
          
          
        // })
        .then((response) => {
          this.videoGame = response.data;
          console.log(response.data)

        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });  

      },
     
    },created(){
        this.getVideoGame();
         
    }
  }
</script>

<template>
  
   <img :src="videoGame.background_image" alt="">
   <p class="title">{{ videoGame.slug }}</p>
   <p class="description">{{ videoGame.released }}</p>
    

</template>

<style scoped>
img{
  width: 60%;
  height: 60%;
  margin-bottom: 1rem;
  border-radius: 20px;
  
  
}




p.title{
  font-family: arial, verdana, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: .8rem;
  line-height: 150%;
  color: rgb(255, 255, 255);
  text-shadow: -1px 0 #1feeff, 0 1px #1feeff, 1px 0 #1feeff, 0 -1px #1feeff;
}

p.description{
  color: white;
  text-align: center;
  font-size: 1.3rem;
}


</style>