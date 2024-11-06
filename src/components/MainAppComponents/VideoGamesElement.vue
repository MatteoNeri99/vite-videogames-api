<script>


export default {
    data() {
      return {
       
        
        
      }
    },components:{
     
    },props:{
      videoGame:{
        type:Object,
        required:true,
        
      }   
    }
  }
</script>

<template>
  
   <img :src="videoGame.background_image == null ? '/src/img/null.png' : videoGame.background_image" alt="">
   <p class="title">{{ videoGame.slug }}</p>
   <p class="description">{{ videoGame.released }}</p>
    

</template>

<style scoped>
img{
  width: 100%;
  height: 60%;
  margin-bottom: 1rem;
  border-radius: 20px;
  object-fit: cover;
  
}

img:hover{
  
  filter:brightness(50%);
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