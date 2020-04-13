const teacherOperate = [
  {
    title: '序号',
    width: '8%',
    scopedSlots: {
      customRender: 'index'
    }
  },
  {
    title: '时间',
    dataIndex: 'optTime',
    width: '30%',
    customRender: (text) => {
      const d = new Date(text)
      return d.getFullYear() + '-' +
             ((d.getMonth() + 1) > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + '-' +
             (d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) +
             ' ' +
             (d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) +
             ':' +
             (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()) +
             ':' +
             (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds())
    }
  },
  {
    title: '操作类型',
    dataIndex: 'type',
    width: '15%',
    customRender: (text) => {
      return text === 1 ? '上班' : '下班'
    }
  },
  {
    title: '原状态',
    dataIndex: 'oldState',
    width: '12%',
    customRender: (text) => {
      if (text === 1) {
        return '迟到'
      } else if (text === 2) {
        return '早退'
      } else if (text === 3) {
        return '上学缺卡'
      } else if (text === 4) {
        return '请假'
      } else if (text === 5) {
        return '正常'
      } else if (text === 6) {
        return '放学缺卡'
      } else {
        return '请假'
      }
    }
  },
  {
    title: '更改后状态',
    dataIndex: 'newState',
    width: '15%',
    customRender: (text) => {
      return text === 1 ? '正常' : '请假'
    }
  },
  {
    title: '操作人',
    dataIndex: 'optName',
    width: '12%'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: '10%'
  }
]
export default teacherOperate
