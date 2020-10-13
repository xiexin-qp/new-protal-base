/**
 * @des 卡务管理模块接口
 * @remak 接口路径后面加#{类型} 如 #post  #get #del
 */

import hostEnv from '@config/host-env'

const cardApi = {
  getCardRecord: '/cardRecord/list#get', // 获取卡操作记录
  cardRecordExport: '/cardrecord/export#post', // 导出卡操作记录
  getCardList: '/accountInfo/cardAccountlist#get', // 查询卡片信息列表
  getCardInfoList: '/cardInfo/list#get', // 查询卡信息列表
  openCard: '/cardInfo/openCard#post', // 开卡
  lossCard: '/cardInfo/lossCard#post', // 卡挂失
  unlockCard: '/cardInfo/unlockCard#post', // 卡解挂
  changeCard: '/cardInfo/changeCard#post', // 换卡
  returnCard: '/cardInfo/returnCard' // 退卡
}
for (const val in cardApi) {
  cardApi[val] = `${hostEnv.hzz_ecard}${cardApi[val]}`
}
export default cardApi
