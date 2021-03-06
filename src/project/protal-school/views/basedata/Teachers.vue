<template>
  <div class="teachers page-layout qui-fx">
    <submit-form
      ref="form"
      @submit-form="submitForm"
      :title="title"
      @org="addOrg"
      v-model="formStatus"
      :form-data="formData">
      <div slot="upload" class="qui-fx qui-fx-ac">
        <upload-multi is-check :length="1" v-model="fileList" :fileInfo="fileInfo" ></upload-multi>
        <span style="font-size:12px;margin-left:10px;">大小20到100kB，像素400x400到800x800，格式仅jpg</span>
      </div>
    </submit-form>
    <no-data msg="暂无教职工" v-if="false">
      <div slot="btn">
        <a-button type="primary" @click="actionTeacher(0)"> <a-icon type="plus" />添加教职工</a-button>
      </div>
    </no-data>
    <div class="qui-fx qui-fx-jsb" style="width:100%" v-else>
      <div class="left">
        <org-tree @select="select"></org-tree>
      </div>
      <div class="right qui-fx-ver qui-fx-f1">
        <search-form isReset @search-form="searchForm" :search-label="searchLabel">
          <div slot="left">
            <a-button icon="plus" class="add-btn" @click="actionTeacher(0)">添加</a-button>
            <a-button icon="export" class="export-all-btn" @click.stop="goLead('/basedata/bulkImport')">批量导入</a-button>
            <a-button icon="delete" class="del-btn" @click.stop="deleteList(0)">批量删除</a-button>
          </div>
        </search-form>
        <table-list
          is-check
          is-zoom
          @clickRow="clickRow"
          :page-list="pageList"
          v-model="chooseList"
          :columns="columns"
          :table-list="teacherList">
          <template v-slot:actions="action">
            <a-tooltip placement="topLeft" title="编辑">
              <a-button size="small" class="edit-action-btn" icon="form" @click.stop="actionTeacher(1, action.record)"></a-button>
            </a-tooltip>
            <a-popconfirm placement="left" okText="确定" cancelText="取消" @confirm="deleteList(1,action.record)">
              <template slot="title">
                您确定删除吗?
              </template>
              <a-tooltip placement="topLeft" title="删除">
                <a-button size="small" class="del-action-btn" icon="delete"></a-button>
              </a-tooltip>
            </a-popconfirm>
          </template>
        </table-list>
        <page-num v-model="pageList" :total="total" @change-page="showList"></page-num>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TableList from '@c/TableList'
import OrgTree from '@c/OrgTree'
import NoData from '@c/NoData'
import PageNum from '@c/PageNum'
import SubmitForm from '../components/SubForm'
import SearchForm from '@c/SearchForm'
import UploadMulti from '@c/UploadMulti'
import ShowDialog from '@c/ShowDialog'
import Tools from '@u/tools'
const columns = [
  {
    title: '序号',
    width: '10%',
    scopedSlots: {
      customRender: 'index'
    }
  },
  {
    title: '姓名',
    dataIndex: 'userName',
    width: '10%'
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    width: '10%'
  },
  {
    title: '工号',
    dataIndex: 'workNo',
    width: '10%'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    width: '10',
    customRender: (text) => {
      return Tools.getSex(text)
    }
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: '10%'
  },
  /*   {
    title: '组织机构',
    dataIndex: 'orgId',
    width: '10%'
  }, */
  {
    title: '人脸照片',
    dataIndex: 'photoUrl',
    width: '10%',
    scopedSlots: {
      customRender: 'snapPic'
    }
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: '10%'
  },
  {
    title: '操作',
    width: '20%',
    scopedSlots: {
      customRender: 'action'
    }
  }
]
const searchLabel = [
  {
    value: 'keyword',
    initValue: '',
    type: 'selectInput',
    selectType: [
      {
        key: 'userName',
        val: '姓名'
      },
      {
        key: 'mobile',
        val: '手机号'
      },
      {
        key: 'workNo',
        val: '工号'
      }
    ],
    placeholder: '请输入'
  }
]
const formData = [
  {
    value: 'userName',
    initValue: '',
    type: 'input',
    label: '姓名',
    placeholder: '请输入姓名'
  },
  {
    value: 'sex',
    initValue: [],
    list: [
      {
        key: 1,
        val: '男'
      },
      {
        key: 2,
        val: '女'
      },
      {
        key: 3,
        val: '未知'
      }
    ],
    type: 'select',
    label: '性别',
    placeholder: '请选择性别'
  },
  {
    value: 'mobile',
    initValue: '',
    type: 'input',
    label: '手机号码',
    regular: 'phone',
    placeholder: '请输入教职工手机号码'
  },
  {
    type: 'upload',
    label: '人脸照片',
    placeholder: '请上传人脸照片'
  },
  {
    value: 'workNo',
    initValue: '',
    type: 'input',
    label: '工号',
    required: false,
    placeholder: '请输入教职工工号'
  },
  {
    value: 'email',
    initValue: '',
    type: 'input',
    label: '邮箱',
    required: false,
    regular: 'email',
    placeholder: '请输入教职工邮箱'
  },
  {
    value: 'orgCode',
    initValue: [],
    type: 'orgChoose',
    label: '组织机构',
    required: false,
    placeholder: '请选择'
  },
  {
    value: 'remark',
    initValue: '',
    type: 'input',
    label: '备注',
    required: false,
    placeholder: '请输入备注'
  }
]
export default {
  name: 'Teachers',
  components: {
    TableList,
    OrgTree,
    PageNum,
    SubmitForm,
    UploadMulti,
    SearchForm,
    NoData,
    ShowDialog,
    addOrgCode: ''
  },
  data () {
    return {
      dialogTag: false,
      confirmLoading: false,
      columns,
      searchLabel,
      fileInfo: {
        tip: '上传图片',
        h: 120, // 高度
        w: 120 // 宽度
      },
      fileList: [],
      uploadFile: [],
      title: '添加教职工',
      formStatus: false,
      formData,
      chooseList: [],
      total: 0,
      pageList: {
        page: 1,
        size: 20
      },
      teacherList: [],
      orgCode: '',
      org: '',
      addOrgCode: '',
      type: 0,
      keyword: '',
      teacherId: ''
    }
  },
  computed: {
    ...mapState('home', ['userInfo'])
  },
  mounted () {
    this.showList()
  },
  methods: {
    ...mapActions('home', [
      'getTeacherList', 'addTeacher', 'getOrgBySchool', 'getOrgList', 'deleteTeacher', 'deleteTeachers', 'editTeacher'
    ]),
    select (item) {
      console.log(item)
      this.orgCode = item.code
      this.showList()
    },
    addOrg (value) {
      console.log(value)
      this.addOrgCode = value
      this.org = value
    },
    submit () {
      this.confirmLoading = true
      setTimeout(() => {
        this.dialogTag = false
        this.confirmLoading = false
      }, 1000)
    },
    searchForm (values) {
      this.keyword = values.keyword
      this.showList(values.keyword)
    },
    submitForm (values) {
      if (this.fileList.length === 0) {
        this.$message.error('人脸照片不能为空')
        this.$refs.form.error()
        return
      }
      const req = {
        ...values,
        orgCode: this.type ? this.org : this.addOrgCode,
        photoUrl: this.fileList.length > 0 ? this.fileList[0].url : '',
        schoolCode: this.userInfo.schoolCode,
        schoolId: this.userInfo.schoolId,
        teacherId: this.type ? this.teacherId : null
      }
      let res = null
      if (this.type === 0) {
        res = this.addTeacher(req)
      } else {
        res = this.editTeacher(req)
      }
      res.then(() => {
        this.$message.success('添加成功')
        this.$tools.goNext(() => {
          this.showList()
          this.$refs.form.reset()
          this.fileList = []
        })
      }).catch(() => {
        this.$refs.form.error()
      })
    },
    actionTeacher (type, record) {
      this.formStatus = true
      if (type) {
        this.type = 1
        this.title = '编辑教职工'
        this.formData = this.$tools.fillForm(formData, record)
        this.fileList = record.photoUrl ? [{ url: record.photoUrl }] : []
        this.formData[6].initValue = record.orgCode.split(',')
        this.teacherId = record.id
        this.org = record.orgCode
      } else {
        this.title = '添加教职工'
        this.formData = formData
        this.fileList = []
        this.type = 0
      }
    },
    async showList (keyword = '') {
      const req = {
        ...this.pageList,
        schoolCode: this.userInfo.schoolCode,
        orgCode: this.orgCode,
        keyword
      }
      const res = await this.getTeacherList(req)
      if (!res.data) {
        return
      }
      this.teacherList = res.data.list
      this.total = res.data.total
    },
    async deleteList (type, record) {
      if (type) {
        console.log(record.id)
        const req = {
          id: record.id,
          schoolCode: this.userInfo.schoolCode
        }
        await this.deleteTeacher(req)
        this.$message.success('删除成功')
        this.$tools.goNext(() => {
          this.showList(this.keyword)
        })
      } else {
        if (this.chooseList.length === 0) {
          this.$message.warning('请选择删除项')
          return
        }
        const req = {
          userIds: this.chooseList,
          schoolCode: this.userInfo.schoolCode
        }
        this.$tools.delTip('您确定删除吗?', () => {
          this.deleteTeachers(req).then(res => {
            this.$message.success('删除成功')
            this.$tools.goNext(() => {
              this.showList(this.keyword)
            })
          })
        })
      }
    },
    clickRow (id) {
    },
    goLead (path) {
      this.$router.push({ path, query: { type: 'teachers' } })
    }
  }
}
</script>
<style lang="less" scoped>
.teachers{
  background: #fff;
  height: 100%;
  .left{
    padding: 10px;
  }
  .right{
    padding: 0 10px;
    border-left: 1px solid @bor-color;
    .action{
      div{
        cursor: pointer;
        margin: 4px 30px 0 0;
        img{
          width: 20px;
          height: 20px;
        }
        span{
          font-size:12px;
        }
      }
    }
  }
}
.modal{
  padding: 0 40px;
  .line{
    margin-bottom: 20px;
  }
  .title{
    font-size: 14px;
    font-weight: bold;
    margin-right: 20px;
    min-width: 70px;
  }
  .download{
    color:#6882da;
    cursor: pointer;
  }
  /deep/ .ant-upload-list-item-info{
    padding: 0 22px 0 4px;
  }
}

</style>
