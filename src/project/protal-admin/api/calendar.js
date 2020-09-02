/**
 * @des 模块接口配置
 * @remak 接口路径后面加#{类型} 如 #post  #get #del
 */

import hostEnv from '@config/host-env'

const calendarApi = {
  addcalendar: '/school/date/add#post', // 新增校历 
  delcalendar: '/school/date/delete/#del', // 删除校历
  calendarDetail: '/school/date/detail/#getWithPara', // 根据id查询校历
  updateCalendar: '/school/date/update#post', // 校历列表
  getcalendarList: '/school/date/list#post' // 查询省份列表
}
for (const val in calendarApi) {
  calendarApi[val] = `${hostEnv.zk_leave}${calendarApi[val]}`
}
export default calendarApi