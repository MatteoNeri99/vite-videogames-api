<script>
import axios from 'axios';
import VideoGamesCard from './MainAppComponents/VideoGamesCard.vue';
import { store } from '../store.js';

export default {
    data() {
      return {
        store,
        numberPages: 1,
        
      }
    },components:{
      VideoGamesCard,
     
    },props:{

     searchText:{
      type:String,
      

     }
    },methods:{

        // chiamata get all'api
      getVideoGames(){
        axios.get('https://api.rawg.io/api/games', {
            params: {
              key:'55c0752d60214456b09ce901954f35c1',
              page:this.numberPages,
              page_size:'16'
            
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

      },

        // funzione che permette di andare avanti di una pagina 
      nextPage (){

        this.numberPages =this.numberPages + 1;
      },
         // funzione che permette di tornare un pagina indietro
      beforePage(){

        this.numberPages =this.numberPages - 1;
      },


      
      

     

    },created(){
      this.getVideoGames();
      
    },
  }
</script>

<template>

  <main>
    
    <section>

      <button  @click.prevent=(beforePage) @click.event=(getVideoGames)>ᐊ</button>

      <div>
      
        <VideoGamesCard :videoGames='store.videoGames'/>

      </div>

      <button  @click.prevent=(nextPage) @click.event=(getVideoGames)>ᐅ</button>
  </section>

    
    
  </main>
 
  
</template>

<style scoped>



main{
  
  height: 100vh;
  overflow: scroll;
  
}

section{
  padding-top:5rem ;
  display: flex;
  align-items: center;
}

div{
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
 
}

button{
  
  font-size: 3rem;
  background-color: black;
  border-color: transparent;
  margin-bottom: 10rem;
  margin-right: 2rem;
  margin-left: 2rem;
  color: white;
}

button:hover{
  color: #1feeff;
  font-size: 4rem;
}


</style>
