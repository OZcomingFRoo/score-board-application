import { createRouter, createWebHistory } from 'vue-router'
import ScoreBoard from '../views/ScoreBoard.vue'
import Settings from '../views/AppSettings.vue'

const routes = [
  { path: '/', redirect: '/score-board' },
  { path: '/score-board', name: 'ScoreBoard', component: ScoreBoard },
  { path: "/settings", name: "Settings", component: Settings },
  {
    path: '/about', name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
