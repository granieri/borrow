import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import Borrow from '@/components/Borrow/Main'
import BorrowItem from '@/components/Borrow/Detail'
import LendAdd from '@/components/Lend/Add'
import LendManageDetail from '@/components/Lend/ManageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'splash',
    //   component: Splash
    // },
    {
      path: '/',
      name: 'borrow',
      component: Borrow
    },
    {
      path: '/borrow/item/:id',
      name: 'BorrowItem',
      component: BorrowItem,
    },
    {
      path: '/lend/add',
      name: 'LendAdd',
      component: LendAdd
    },
    {
      path: '/lend/mgmt/item/:id',
      name: 'ManageItem',
      component: LendManageDetail
    }
  ]
})
