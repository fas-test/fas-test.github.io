import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/ToolsView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/tools/start-progress',
      name: 'start-progress',
      component: () => import('../views/tools/StartProgressView.vue')
    },
    {
      path: '/tools/soft-skills',
      name: 'soft-skills',
      component: () => import('../views/tools/SoftSkillsView.vue')
    },
    {
      path: '/tools/digital-skills',
      name: 'digital-skills',
      component: () => import('../views/tools/DigitalSkillsView.vue')
    },
    {
      path: '/tools/social-skills',
      name: 'social-skills',
      component: () => import('../views/tools/SocialSkillsView.vue')
    },
    {
      path: '/tools/communication-skills',
      name: 'communication-skills',
      component: () => import('../views/tools/CommunicationSkillsView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
