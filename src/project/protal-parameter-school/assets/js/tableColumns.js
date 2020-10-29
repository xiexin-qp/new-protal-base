import Tools from '@u/tools'
// 运营端
// 安全知识
export const knowledgeColumns = [
  {
    title: '序号',
    scopedSlots: {
      customRender: 'index'
    },
    width: '8%'
  },
  {
    title: '资源名称',
    dataIndex: 'name',
    width: '10%'
  },
  {
    title: '资源类型',
    dataIndex: 'resourceType',
    width: '10%'
  },
  {
    title: '文件类型',
    dataIndex: 'fileTypeName',
    width: '10%'
  },
  {
    title: '封面图',
    dataIndex: 'thumbnailUrl',
    width: '15%',
    scopedSlots: {
      customRender: 'photoPic'
    }
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
// 安全课堂
export const safeClassItemColumns = [
  {
    title: '序号',
    scopedSlots: {
      customRender: 'index'
    },
    width: '8%'
  },
  {
    title: '课堂名称',
    dataIndex: 'name',
    width: '10%'
  },
  {
    title: '课堂分类',
    dataIndex: 'classType',
    width: '10%'
  },
  {
    title: '适用学段',
    dataIndex: 'section',
    width: '10%'
  },
  {
    title: '封面图',
    dataIndex: 'thumbnailUrl',
    width: '15%',
    scopedSlots: {
      customRender: 'photoPic'
    }
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
// 添加安全课堂-查询绑定课堂习题
export const exerciseColumns = [
  {
    title: '序号',
    scopedSlots: {
      customRender: 'index'
    },
    width: '8%'
  },
  {
    title: '习题内容',
    dataIndex: 'content',
    width: '10%'
  },
  {
    title: '习题类型',
    dataIndex: 'topicType',
    width: '10%',
    customRender: (text) => {
      if (text === '1') {
        return '单选题'
      } else if (text === '2') {
        return '判断题'
      }
    }
  },
  {
    title: '习题难易程度',
    dataIndex: 'degreeDifficulty',
    width: '15%',
    customRender: (text) => {
      if (text === '1') {
        return '简单'
      } else if (text === '2') {
        return '一般'
      } else if (text === '3') {
        return '困难'
      }
    }
  },
  {
    title: '习题预设分数',
    dataIndex: 'sysFraction',
    width: '10%'
  },
  {
    title: '习题分数',
    dataIndex: 'fraction',
    width: '15%',
    scopedSlots: {
      customRender: 'fraction'
    }
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
// 添加安全课堂-查询习题库
export const exerciseListColumns = [
  {
    title: '序号',
    scopedSlots: {
      customRender: 'index'
    },
    width: '8%'
  },
  {
    title: '习题内容',
    dataIndex: 'content',
    width: '20%'
  },
  {
    title: '习题类型',
    dataIndex: 'topicType',
    width: '10%',
    customRender: (text) => {
      if (text === '1') {
        return '单选题'
      } else if (text === '2') {
        return '判断题'
      }
    }
  },
  {
    title: '习题难易程度',
    dataIndex: 'degreeDifficulty',
    customRender: (text) => {
      if (text === '1') {
        return '简单'
      } else if (text === '2') {
        return '一般'
      } else if (text === '3') {
        return '困难'
      }
    }
  },
  {
    title: '习题预设分数',
    dataIndex: 'fraction',
    width: '10%'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: '15%',
    ellipsis: true
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
// 添加安全课堂-查询绑定课堂资源
export const resourcesColumns = [
  {
    title: '序号',
    width: '80px',
    scopedSlots: {
      customRender: 'index'
    }
  },
  {
    title: '资源名称',
    dataIndex: 'name'
  },
  {
    title: '文件类型',
    dataIndex: 'docType'
  },
  {
    title: '文件大小',
    dataIndex: 'docSize'
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
// 安全课堂-习题库列表页
export const exercisePageListColumns = [
  {
    title: '序号',
    width: '50px',
    scopedSlots: {
      customRender: 'index'
    }
  },
  {
    title: '习题内容',
    dataIndex: 'content',
    width: '100px'
  },
  {
    title: '资源类型',
    dataIndex: 'resourceType'
  },
  {
    title: '习题类型',
    dataIndex: 'exercisesType'
  },
  {
    title: '难易程度',
    dataIndex: 'difficultyDegree'
  },
  {
    title: '答案数量',
    dataIndex: 'answerCount'
  },
  {
    title: '习题预设分数',
    dataIndex: 'fraction'
  },
  {
    title: '是否为安全测题',
    dataIndex: 'hasEvaluation'
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
// 安全课堂-课堂资源
export const resourcesPageListColumns = [
  {
    title: '序号',
    width: '80px',
    scopedSlots: {
      customRender: 'index'
    }
  },
  {
    title: '资源名称',
    dataIndex: 'name',
    width: '100px'
  },
  {
    title: '资源类型',
    dataIndex: 'resourceType'
  },
  {
    title: '发布人',
    dataIndex: 'publishName'
  },
  {
    title: '发布时间',
    dataIndex: 'createTime',
    customRender: text => {
      return Tools.getDate(text)
    }
  },
  {
    title: '文件类型',
    dataIndex: 'docType'
  },
  {
    title: '文件大小',
    dataIndex: 'docSize'
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
// 局端
// 精品安全知识
export const boutKnowledgeColumns = [
  {
    title: '序号',
    scopedSlots: {
      customRender: 'index'
    },
    width: '8%'
  },
  {
    title: '资源名称',
    dataIndex: 'name',
    width: '10%'
  },
  {
    title: '资源类型',
    dataIndex: 'resourceType',
    width: '10%'
  },
  {
    title: '文件类型',
    dataIndex: 'fileTypeName',
    width: '10%'
  },
  {
    title: '封面图',
    dataIndex: 'thumbnailUrl',
    width: '15%',
    scopedSlots: {
      customRender: 'photoPic'
    }
  },
  {
    title: '机构来源',
    dataIndex: 'sourceUnit',
    width: '10%'
  },
  {
    title: '操作',
    width: '15%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
