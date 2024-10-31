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
   <p>{{ videoGame.slug }}</p>
    

</template>

<style scoped>
img{
  width: 100%;
}


</style>