<template>
  <div>
    <el-row class="warp">
<!--
Form 组件提供了表单验证的功能，只需要通过 rule 属性传入约定的验证规则，并 Form-Item 的 prop 属性设置为需校验的字段名即可。具体可以参考官网：http://element.eleme.io/#/zh-CN/component/form
-->
      <el-col :span="24" class="warp-main">
        <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="120px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="infoForm.title"></el-input>
          </el-form-item>
          
          <el-form-item label="编号" prop="title">
            <el-input v-model="infoForm.id"></el-input>
          </el-form-item>
          

          <!-- <el-form-item label="时间" prop="title">
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1" v-model="infoForm.time">
            </el-date-picker>
          </el-form-item> -->
          <el-form-item label="作者信息" prop="user">
            <el-input v-model="infoForm.user"></el-input>
          </el-form-item>

          <el-form-item label="文章类型" prop="type">
            <el-input v-model="infoForm.type"></el-input>
          </el-form-item>
<!--使用编辑器
-->
          <el-form-item label="详细">
            <div class="edit_container">
              <quill-editor v-model="infoForm.article"
                            ref="myQuillEditor"
                            class="editer"
                              @ready="onEditorReady($event)">
              </quill-editor>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>


    </el-row>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor' //调用编辑器
  export default {
    data() {
      return {
        infoForm: {
          title: '',
          user: '',
          id: '',
          type: '',
          article:''
          
          // editorOption: {}
        },
        //表单验证
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          user: [
            {required: true, message: '请输入作者名称', trigger: 'blur'}
          ],
          id: [
            {required: true, message: '请输入一个文章唯一的编号', trigger: 'blur'},
            {
                     validator: function (rule, value, callback) {
                         var MobileRegex = /^[1-9]\d|0$/;
                         if (!MobileRegex.test(value)) {
                             callback(new Error('请输入唯一id！'))
                         } else {
                             callback();
                         }
                     }, trigger: 'blur'
                 }

          ],
          type: [
            {required: true, message: '请输入类型', trigger: 'blur'}
          ],
          article: [
            {required: true, message: '请输入详细内容', trigger: 'blur'}
          ]
        },
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      //初始化
    },
    methods: {
      onEditorReady(editor) {
      },
      onSubmit() {
        console.log(1)
        //提交
//this.$refs.infoForm.validate，这是表单验证
        this.$refs.infoForm.validate((valid) => {
          
          if(valid) {
            this.$http.post('http://101.132.172.106:9001/news',this.infoForm).then(res => {   
              if(res.errCode == 200) {
                this.$message({
                  message: res.errMsg,
                  type: 'success'
                });
                this.$router.push('/news');
              } else {
                this.$message({
                  message: res.errMsg,
                  type:'error'
                });
              }
            });
          }
        });
      }
    },
    components: {
//使用编辑器
      quillEditor
    }
  }
</script>

<style >
.ql-editor {
  min-height: 400px;
}

.el-table thead {
    color: #909399;
    font-weight: 500;
    line-height: 40px !important;
}

</style>


