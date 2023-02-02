import { createRouter, createWebHistory } from 'vue-router'
import Addons from '../views/Addons.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import FinishingUp from '@/views/FinishingUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'finish',
      component: FinishingUp
    },
    // {
    //   path: '/',
    //   name: 'info',
    //   component: PersonalInfo
    // },
    {
      path: '/select-your-plan',
      name: 'plan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SelectYourPlan.vue')
    }
  ]
})

export default router
