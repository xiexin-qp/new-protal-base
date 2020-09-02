import { RouteView } from '../layouts'
const DangerGroup = resolve => require(['../views/dangerManage/DangerGroup.vue'], resolve)
const DangerClass = resolve => require(['../views/dangerManage/DangerClass.vue'], resolve)
const DangerFind = resolve => require(['../views/dangerManage/DangerFind.vue'], resolve)
const DangerSupervise = resolve => require(['../views/dangerManage/DangerSupervise.vue'], resolve)
const AddFind = resolve => require(['../views/dangerManage/AddFind.vue'], resolve)
const DangerDetail = resolve => require(['../views/dangerManage/DangerDetail.vue'], resolve)
const DangerDeal = resolve => require(['../views/dangerManage/DangerDeal.vue'], resolve)
const RectificationNotice = resolve => require(['../views/dangerManage/RectificationNotice.vue'], resolve)

const danger = {
  path: '/danger',
  name: 'danger',
  component: RouteView,
  meta: {
    title: '隐患管理'
  },
  children: [
    {
      path: '/dangerGroup',
      name: 'dangerGroup',
      component: DangerGroup,
      meta: {
        title: '隐患小组'
      }
    },
    {
      path: '/dangerFind/rectificationNotice',
      name: 'rectificationNotice',
      component: RectificationNotice,
      meta: {
        title: '整改通知书详情',
        isHide: true
      }
    },
    {
      path: '/dangerClass',
      name: 'dangerClass',
      component: DangerClass,
      meta: {
        title: '隐患分类'
      }
    },
    {
      path: '/dangerFind/addFind',
      name: 'addFind',
      component: AddFind,
      meta: {
        title: '上报隐患',
        isHide: true
      }
    },
    {
      path: '/dangerFind',
      name: 'dangerFind',
      component: DangerFind,
      meta: {
        title: '隐患发现'
      }
    },
    {
      path: '/dangerFind/dangerDeal',
      name: 'dangerDeal',
      component: DangerDeal,
      meta: {
        title: '隐患处理',
        isHide: true
      }
    },
    {
      path: '/dangerSupervise',
      name: 'dangerSupervise',
      component: DangerSupervise,
      meta: {
        title: '隐患督办'
      }
    },
    {
      path: '/dangerFind/dangerDetail',
      name: 'dangerDetail',
      component: DangerDetail,
      meta: {
        title: '隐患详情',
        isHide: true
      }
    }
  ]
}

export default danger