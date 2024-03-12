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
      path: '/consulting',
      name: 'consulting',
      component: () => import('../views/ConsultingView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/tools/start',
      name: 'start',
      component: () => import('../views/tools/StartView.vue')
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
      path: '/tools/progress',
      name: 'progress',
      component: () => import('../views/tools/ProgressView.vue')
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
