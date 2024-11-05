import { createRouter, createWebHistory } from 'vue-router';
import HomePages from './pages/HomePages.vue';
import VideoGamesList from './pages/VideoGamesList.vue';

const routes = [
    {
      path: '',
      name: 'homepage',
      component: HomePages,
    },
    
    {
        path: '/videogames',
        name: 'videogames',
        component: VideoGamesList,
    },
    // {
    //   path: '/apartment-details/:id',
    //   name: 'apartment-details',
    //   component: ,
    //   props: true,  // Passa l'ID come prop

    // params: { id: apartment.id } da inserire  nel router link
    // },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;