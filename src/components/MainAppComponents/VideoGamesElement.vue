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
  
   <img :src="videoGame.background_image" alt="">
   <p class="title">{{ videoGame.slug }}</p>
   <p class="description">{{ videoGame.released }}</p>
    

</template>

<style scoped>
img{
  width: 100%;
  height: 60%;
  margin-bottom: 1rem;
  border-radius: 20px;
  
}

img:hover{
  
  filter:brightness(50%);
}



p.title{
  font-family: arial, verdana, sans-serif;
  text-align: center;
  text-transform: uppercase;
  line-height: 150%;
  color: rgb(255, 255, 255);
  text-shadow: -1px 0 #0893e8, 0 1px #0893e8, 1px 0 #0893e8, 0 -1px #0893e8;
}

p.description{
  color: white;
  text-align: center;
  font-size: 1.3rem;
}


</style>