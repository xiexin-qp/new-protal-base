<template>
  <a-modal
    width="800px"
    title="变更状态"
    v-model="dialogTag"
    :maskClosable="false"
    :destroyOnClose="true"
    @ok="submitOk"
    okText="保存"
    :confirmLoading="confirmLoading"
  >
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout" label="状态改为" required>
        <a-checkbox-group v-model="checkedList">
          <div class="qui-fx mar-b10">
            <div style="width:80px">
              <a-checkbox :value="onWork"> 上班 </a-checkbox>
            </div>
            <div style="width:300px">
              <a-select v-model="workState">
                <a-select-option v-for="item in stateType" :key="item.key">{{ item.value }}</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="qui-fx mar-b10">
            <div style="width:80px">
              <a-checkbox :value="onRest"> 下班 </a-checkbox>
            </div>
            <div style="width:300px">
              <a-select v-model="restState" >
                <a-select-option v-for="item in stateType" :key="item.key">{{ item.value }}</a-select-option>
              </a-select>
            </div>
          </div>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="备注" >
        <a-textarea
          placeholder="请输入备注"
          v-decorator="[
            'remark',
            { initialValue: appForm.remark, rules: [ { required: false, message: '请输入备注' } ]}
          ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { mapActions } from 'vuex'
import TableList from '@c/TableList'
export default {
  name: 'RecordChange',
  components: {
    TableList
  },
  data () {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
      },
      dialogTag: false,
      confirmLoading: false,
      checkedList: [],
      workState: '1',
      restState: '1',
      onWork: '1',
      onRest: '2',
      stateType: [{
        key: '1',
        value: '正常'
      }, {
        key: '2',
        value: '请假'
      }],
      appForm: {}
    }
  },
  async mounted () {
  },
  methods: {
    ...mapActions('home', [
      ''
    ]),
    submitOk (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.checkedList.length === 0) {
            this.$message.warning('请选择更改项')
            return false
          }
          if (this.checkedList.indexOf('1') > -1) {
            values.onWork = true
            values.workState = this.workState
          } else {
            values.workState = ''
          }
          if (this.checkedList.indexOf('2') > -1) {
            values.onRest = true
            values.restState = this.restState
          } else {
            values.restState = ''
          }
          this.dialogTag = false
          // this.changeSubmit(values).then(res => {
          //   this.confirmLoading = true
          //   this.dialogTag = false
          //   this.$message.success('操作成功')
          //   this.$tools.goNext(() => {
          //     this.showList()
          //   })
          // }).catch(() => {
          //   this.confirmLoading = false
          // })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
