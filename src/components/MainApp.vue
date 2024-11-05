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
     
    },methods:{

        // chiamata get all'api
      getVideoGames(){
        axios.get('https://api.rawg.io/api/games', {
          params: {
            key:'55c0752d60214456b09ce901954f35c1',
            page:store.numberPages,
            page_size:'16',
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

      },

        // funzione che permette di andare avanti di una pagina 
      nextPage (){

        store.numberPages =store.numberPages + 1;
      },
         // funzione che permette di tornare un pagina indietro
      beforePage(){

        store.numberPages =store.numberPages - 1;
      },

      addAnimationLeft(){
        const divEl = document.querySelector('.container')
        divEl.classList.add('horizontalAnimationLeft');
        setTimeout(() => {
          divEl.classList.remove('horizontalAnimationLeft');
        }, "500");

      },
      addAnimationRight(){
        const divEl = document.querySelector('.container')
        divEl.classList.add('horizontalAnimationRight');
        setTimeout(() => {
          divEl.classList.remove('horizontalAnimationRight');
        }, "500");

      },



    },created(){
      this.getVideoGames();
      
    },
  }

</script>

<template>

  <main>
    <section>

      <button  @click.prevent=(beforePage) @click.event=(getVideoGames) @click="addAnimationLeft">ᐊ</button>

      <div class="container">
      
        <VideoGamesCard :videoGames='store.videoGames'/>

      </div>

      <button  @click.prevent=(nextPage) @click.event=(getVideoGames)  @click="addAnimationRight">ᐅ</button>

    </section>
  </main>
 
  
</template>

<style scoped>



main{
  
  height: calc(100vh - 140px);
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



.horizontalAnimationLeft {
  animation-duration: .5s;
  animation-name: slide-in-left;
}

@keyframes slide-in-left {
  from {
    translate: 0 0;
    
    /* scale: 150% 1; */
  }

  to {
    translate: 100vw 0;
    /* scale: 100% 1; */
  }
}

.horizontalAnimationRight {
  animation-duration: .5s;
  animation-name: slide-in-right;
}

@keyframes slide-in-right {
  from {
    translate:  0 0vw;
    /* scale: 150% 1; */
  }

  to {
    translate: -100vw 0;
    /* scale: 100% 1; */
  }
}

</style>
