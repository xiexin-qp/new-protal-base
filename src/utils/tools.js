/**
 * @description 全局的功能函数
 */

import Vue from 'vue'
import baseData from './base-data'
import autoImg from '@a/img/auto_app.png'
const vm = new Vue({})

const Tools = {
  // 深拷贝数据
  deepClone(data) {
    return JSON.parse(JSON.stringify(data))
  },
  // 根据时间戳获取日期
  getDate(t, type) {
    const d = new Date(t)
    const time =
      d.getFullYear() +
      '-' +
      (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) +
      '-' +
      (d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) +
      ' ' +
      (d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) +
      ':' +
      (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()) +
      ':' +
      (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds())
    if (type === 1) {
      return time.substring(0, 10)
    } else if (type === 2) {
      return time.substring(11, 19)
    } else if (type === 3) {
      return time.substring(0, 7)
    } else if (type === 4) {
      return time.substr(11, 5)
    } else if (type === 5) {
      return time.substr(0, 19)
    } else {
      return time
    }
  },
  // 根据日期获取时间撮
  getDateTime(date) {
    return new Date(date.replace(/-/g, '/'))
  },
  // html图片转换格式的方法
  dataURLToBlob(dataurl) {
    // console.log(dataurl)
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], {
      type: mime
    })
  },
  // 设置table滚动高度
  setScroll(id) {
    if (document.getElementById(id)) {
      return document.getElementById(id).offsetHeight - 40
    }
  },
  // 延迟处理方法
  goNext: fn => {
    setTimeout(() => {
      fn()
    }, 1200)
  },
  // 删除提示
  delTip(title = '确定删除吗?', fn) {
    vm.$Modal.confirm({
      title,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        fn()
      }
    })
  },
  // 表单回填
  fillForm(autoForm, record) {
    return autoForm.map(item => {
      var initValue
      initValue = record[item.value] || ''
      if (parseInt(record[item.value]) === 0) {
        initValue = 0
      }
      if (item.type === 'rangeTime') {
        initValue = [record.startTime, record.endTime]
      }
      if (item.type === 'checkbox') {
        initValue = Array.isArray(initValue) ? initValue : initValue.split(',')
      }
      return {
        ...item,
        initValue: initValue
      }
    })
  },
  // 加载图片错误处理
  errorImg(event, img) {
    event.target.src = img || autoImg
  },
  color(text) {
    if (text === 1) {
      return '#ff9900'
    } else if (text === 2) {
      return '#fa3534'
    } else if (text === 3 || text === 6) {
      return '#c76c4a'
    } else if (text === 4) {
      return '#a0cfff'
    } else if (text === 5) {
      return '#71d5a1'
    } else if (text === 7) {
      return '#fab6b6'
    }
  },
  userType(text) {
    text = parseInt(text)
    if (text === 1) {
      return '超级管理员'
    } else if (text === 2) {
      return '管理员'
    } else if (text === 4) {
      return '教职工'
    } else if (text === 8) {
      return '学生'
    } else if (text === 16) {
      return '家长'
    } else if (text === 32) {
      return '访客'
    }
  },
  getCardStatus(text) {
    text = parseInt(text)
    if (text === 0) {
      return '正常'
    } else if (text === -1) {
      return '未发卡'
    } else if (text === 1) {
      return '已挂失'
    } else if (text === 2) {
      return '已销卡'
    }
  },
  getApprovalColor(text) {
    if (parseInt(text) === 0 || text === '未开始') {
      return '#87d068'
    } else if (parseInt(text) === 1 || text === '使用中') {
      return '#2db7f5'
    } else if (parseInt(text) === 2) {
      return '#f50'
    } else if (parseInt(text) === 3 || text === '已失效') {
      return '#ccc'
    } else if (parseInt(text) === 4 || text === '审批中') {
      return '#006400'
    }
  },
  relationship(text) {
    text = parseInt(text)
    if (text === 1) {
      return '爸爸'
    } else if (text === 2) {
      return '妈妈'
    } else if (text === 3) {
      return '爷爷'
    } else if (text === 4) {
      return '奶奶'
    } else {
      return '其他'
    }
  },
  stateType(text) {
    text = parseInt(text)
    if (text === 0) {
      return '待处理'
    } else if (text === 1) {
      return '处理中'
    } else if (text === 2) {
      return '未同意'
    } else if (text === 3) {
      return '已修复'
    } else if (text === 4) {
      return '未修复'
    } else if (text === 5) {
      return '已处理'
    } else {
      return '已撤回'
    }
  },
  stateTypeColor(text) {
    text = parseInt(text)
    if (parseInt(text) === 0) {
      return '#778899'
    } else if (parseInt(text) === 1) {
      return '#2db7f5'
    } else if (parseInt(text) === 2) {
      return '#A52A2A'
    } else if (parseInt(text) === 3) {
      return '#8FBC8F'
    } else if (parseInt(text) === 4) {
      return '#f50'
    } else if (parseInt(text) === 5) {
      return '#87d068'
    } else {
      return '#A9A9A9'
    }
  },
  getType(text) {
    text = parseInt(text)
    if (text === 0) {
      return '待审批'
    } else if (text === 1) {
      return '待发放'
    } else if (text === 2) {
      return '已退回'
    } else if (text === 3) {
      return '已发放'
    }
  },
  stateColor(text) {
    text = parseInt(text)
    if (parseInt(text) === 0) {
      return '#108ee9'
    } else if (parseInt(text) === 1) {
      return '#2db7f5'
    } else if (parseInt(text) === 2) {
      return '#f50'
    } else if (parseInt(text) === 3) {
      return ' #87d068'
    }
  },
  appStateType(text) {
    text = parseInt(text)
    if (text === 1) {
      return '待审批'
    } else if (text === 2) {
      return '已同意'
    } else if (text === 3) {
      return '未同意'
    } else if (text === 4) {
      return '已撤回'
    }
  },
  appState(text) {
    text = parseInt(text)
    if (parseInt(text) === 1) {
      return '#108ee9'
    } else if (parseInt(text) === 2) {
      return '#87d068'
    } else if (parseInt(text) === 3) {
      return '#2db7f5'
    } else if (parseInt(text) === 4) {
      return ' #f50'
    }
  },
  sourceDanger(text) {
    text = parseInt(text)
    if (parseInt(text) === 1) {
      return '隐患排查'
    } else if (parseInt(text) === 2) {
      return '日常巡查'
    } else if (parseInt(text) === 3) {
      return '专项检查'
    } else if (parseInt(text) === 4) {
      return '社会监督'
    }
  },
  dangerLevel(text) {
    text = parseInt(text)
    if (parseInt(text) === 1) {
      return '低风险'
    } else if (parseInt(text) === 2) {
      return '一般风险'
    } else if (parseInt(text) === 3) {
      return '较大风险'
    } else if (parseInt(text) === 4) {
      return '重大风险'
    }
  },
  dangerState(text) {
    text = parseInt(text)
    if (parseInt(text) === 1) {
      return '已上报'
    } else if (parseInt(text) === 2) {
      return '已指派'
    } else if (parseInt(text) === 3) {
      return '已处理'
    } else if (parseInt(text) === 4) {
      return '已验收'
    } else if (parseInt(text) === 5) {
      return '已撤销'
    }
  },
  stAte(text) {
    text = parseInt(text)
    if (text === 0) {
      return '待审批'
    } else if (text === 1) {
      return '待发放'
    } else if (text === 2) {
      return '已退回'
    } else if (text === 3) {
      return '已发放'
    }
  },
  // 事故等级
  accidentLevel(text) {
    text = parseInt(text)
    if (text === 1) {
      return '特大重大事故'
    } else if (text === 2) {
      return '重大事故'
    } else if (text === 3) {
      return '较大事故'
    } else if (text === 4) {
      return '一般事故'
    }
  },
  // 事故性质
  accidentNature(text) {
    text = parseInt(text)
    if (text === 1) {
      return '责任事故'
    } else if (text === 2) {
      return '自然事故'
    } else if (text === 3) {
      return '技术事故'
    } else if (text === 4) {
      return '其它'
    }
  },
  // 事故类型
  accidentType(text) {
    text = parseInt(text)
    if (text === 1) {
      return '交通事故'
    } else if (text === 2) {
      return '踩踏事故'
    } else if (text === 3) {
      return '溺水事故'
    } else if (text === 4) {
      return '火灾事故'
    } else if (text === 5) {
      return '触电事故'
    } else if (text === 6) {
      return '校园伤害'
    } else if (text === 7) {
      return '其它'
    }
  },
  // 事故状态
  accidentStatus(text) {
    text = parseInt(text)
    if (text === 1) {
      return '新填报'
    } else if (text === 2) {
      return '处理中'
    } else if (text === 3) {
      return '已结案'
    }
  },
  ...baseData
}

export default Tools