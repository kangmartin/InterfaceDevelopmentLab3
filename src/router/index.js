import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import HomePage from '@/pages/HomePage.vue';
import ConversationsIndexPage from '@/pages/ConversationsIndexPage.vue';

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/conversations',
    component: ConversationsIndexPage,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.user) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;