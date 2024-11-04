<script>
import { store } from '../store.js';
import axios from 'axios';



export default {
    data() {
      return {
        store,
        
        
      }
    },
    components:{
     
    },methods:{

      // chiamata get all'api
      getVideoGames(){
        axios.get('https://api.rawg.io/api/games', {
          params: {
            key:'55c0752d60214456b09ce901954f35c1',
            search : store.searchText,
            
            }
          })
          .then((response) => {
            store.videoGames = response.data.results;
            console.log(store.searchText)

          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });  

      }
       
    }
  }


</script>

<template>

    <header>

        <img src="../img/videogames-2-11-2024-removebg-preview.png" alt="">
        
        <input type="text" placeholder=" search" v-model="store.searchText" >

        <button @click="getVideoGames">cerca</button>


    </header>


 
  
</template>

<style scoped>

header{
   
  display: flex;
  
  img{
  width: 500px;
  margin-left: 2rem;
  }

  input{
    align-self:center;
    margin-left: 30rem;
    padding: 0.3rem ;
    width: 50rem;
    border-radius: 20px;
    border-color: transparent;
    color: black;
    border: 3px solid #1feeff;

  }

  button{
    align-self:center;
    margin-left: 1rem;
    padding: 0.3rem ;
    border-radius: 20px;
    border-color: transparent;
    color: black;
    border: 3px solid #1feeff;


  }

}

</style>