<script>
import { RouterView } from 'vue-router';


export default {
    data() {
      return {
       
        
      }
    }
  }
</script>

<template>
  <div>
    <header>

      <img src="../img/logoInv.png" alt="" class="logo">

      <div class="container">
        <router-link :to="{ name: 'videogames', }" >Videogames</router-link>
        <router-link :to="{ name: 'videogames', }" >Videogames</router-link>
        <router-link :to="{ name: 'videogames', }" >Videogames</router-link>

      </div>

    </header>
   
    <main>

      <div class="container">

        <p>Benvenuto su Videogames, il punto di riferimento per tutti gli appassionati di videogiochi! Qui troverai le ultime notizie, recensioni, anteprime e approfondimenti sui titoli più attesi e sulle novità dal mondo gaming. Il nostro team di esperti copre ogni aspetto del settore: dai giochi AAA agli indie, dalle console di ultima generazione ai giochi per PC e mobile. Non solo: proponiamo anche guide strategiche, consigli tecnici, e analisi per aiutarti a scoprire ogni segreto del tuo gioco preferito. Entra nel nostro universo e rimani sempre aggiornato sulle tendenze, le novità e gli eventi più importanti del mondo videoludico.

          Videogames: il mondo del gaming, raccontato con passione.</p>

        <img src="../img/d7n0uia-6c6f769c-d0c8-4794-a232-7e5141c98175.png" alt="">

      </div>
    
    </main>

  </div>

  

  

</template>

<style scoped>


div{
  background-color: #1feeff;
}

header{
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 1rem;

  img.logo{
    width: 500px;
    margin-left: 1rem;
  }

  a{
    text-decoration: none;
    color: black;
    font-size: 2rem;
    margin-right: 2rem;
  }
  a:hover{
    color: white;
    text-decoration: underline;
    font-size: 2.5rem;
  }

}

main{
  display: flex;
  align-items: center;

 

  .container{
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 10rem;

    img{
      width: 800px;
    }

    p{
      font-size: 2rem;

    }

  }

}






</style>