import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriversView from '../views/DriversView.vue'
import DriverEdit from '../components/DriverEdit.vue'
import BussesView from '../views/BussesView.vue'
import BusEdit from '../components/BusEdit.vue'
import AssignmentsView from '../views/AssignmentsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import(/* webpackChunkName: "drivers" */ '../views/DriversView.vue')
    },
    {
      path: '/drivers/config/:id?',
      name: 'drivers-config',
      component: () => import(/* webpackChunkName: "driverEdit" */ '../components/DriverEdit.vue'),
      props: (route) => ({ receivedDriverId: parseInt(route.params.id) })
    },
    {
      path: '/busses',
      name: 'busses',
      component: () => import(/* webpackChunkName: "busses" */ '../views/BussesView.vue')
    },
    {
      path: '/busses/config/:id?',
      name: 'busses-config',
      component: () => import(/* webpackChunkName: "busEdit" */ '../components/BusEdit.vue')
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: () => import(/* webpackChunkName: "assignments" */ '../views/AssignmentsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
    }
  ]
})

export default router
