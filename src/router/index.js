import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import Borrow from '@/components/Borrow/Main'
import Lend from '@/components/Lend/Nav'
import BorrowItem from '@/components/Borrow/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash
    },
    {
      path: '/borrow',
      name: 'borrow',
      component: Borrow
    },
    {
      path: '/borrow/item/:id',
      name: 'BorrowItem',
      component: BorrowItem,
    },
    {
      path: '/lend',
      name: 'Lend',
      component: Lend
    }
  ]
})
