// eslint-disable-next-line
import { BasicLayout } from '../layouts'
import visitor from './visitor'
import accessSet from './accessSet'
import system from './system'
const AccessRecord = resolve => require(['../views/AccessRecord.vue'], resolve)

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: {
      title: '门禁管理'
    },
    redirect: '/accessRecord',
    children: [
      {
        path: '/accessRecord',
        name: 'accessRecord',
        component: AccessRecord,
        meta: {
          title: '出入记录'
        }
      },
      visitor,
      accessSet,
      system
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
// const constantRouterMap = [{
//   path: '',
//   name: 'login',
//   component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login')
// }]

let RouterMap = [...asyncRouterMap]
if (process.env.NODE_ENV === 'development') {
  RouterMap = [...asyncRouterMap]
}

export default RouterMap
