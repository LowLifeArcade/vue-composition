import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostsViewVue from '../views/PostsView.vue';
import ModalsViewVue from '../views/ModalsView.vue';
import PostDetailViewVue from '../views/PostDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsViewVue,
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsViewVue,
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailViewVue,
    },
  ],
});

export default router;
