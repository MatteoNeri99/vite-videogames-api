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

    <section>

        <img :src="videoGame.background_image == null ? '/src/img/null.png' : videoGame.background_image" alt="">

        <div>

            <p class="title">{{ videoGame.slug }}</p>
            <p class="data">{{ videoGame.released }}</p>
            <p class="description">{{ videoGame.description_raw }}</p>


        </div>
        

    </section>
  
   
    

</template>

<style scoped>

    section{

        display: flex;
        padding: 3rem;
        border: 5px solid #1feeff;
        margin: 3rem 3rem;
        border-radius: 20px;

        img{
            width:1000px ;
            height: 700px;
            margin-bottom: 1rem;
            border-radius: 20px;
            border: 5px solid white;
        }

        p.title{
            font-family: arial, verdana, sans-serif;
            text-align: center;
            text-transform: uppercase;
            font-size: 3rem;
            line-height: 150%;
            color: rgb(255, 255, 255);
            text-shadow: -1px 0 #1feeff, 0 1px #1feeff, 1px 0 #1feeff, 0 -1px #1feeff;
        }

        p.data{
            color: white;
            text-align: center;
            font-size: 2rem;
        }
        p.description{
            color: white;
            text-align: center;
            font-size: 1.3rem;
        }

    div{
        padding: 1rem;
    }

    }

</style>