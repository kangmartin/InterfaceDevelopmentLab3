import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ConversationsIndexPage from '@/pages/ConversationsIndexPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/conversations', component: ConversationsIndexPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;