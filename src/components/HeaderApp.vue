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
      searchVideoGames(){
        axios.get('https://api.rawg.io/api/games', {
          params: {
            key:'55c0752d60214456b09ce901954f35c1',
            search : store.searchText,
            page_size: '16'
            
            }
          })
          .then((response) => {
            store.videoGames = response.data.results;
            console.log(store.videoGames)

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

        
        <router-link :to="{ name: 'homepage', }"><img src="../img/videogames-2-11-2024-removebg-preview.png" alt="" class="logo"></router-link>
        
        <input type="text" placeholder=" search" v-model="store.searchText" @keyup="searchVideoGames" >

        <button  @click="searchVideoGames" >cerca</button>


    </header>


 
  
</template>

<style scoped>

header{
  height: 140px;
  display: flex;
  
  .logo{
  width: 500px;
  margin-left: 2rem;
  margin-top: 1rem;
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