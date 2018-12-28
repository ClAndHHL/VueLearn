<template>
<div>
    <el-row>
        <el-table
            v-loading="loading"
            :data="tableData"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
        </el-table>
    </el-row>
    <el-row>
        <div class="app">
        <div ref="msgDiv">{{msg}}</div>
        <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
        <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
        <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
        <button @click="changeMsg">
            Change the Message
        </button>
        </div>   
    </el-row>    
    <el-row>
        <el-button :plain="true" @click="open">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
    </el-row>
</div>

</template>

<script>
import { Loading } from 'element-ui';

export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true,
        msg: 'Hello Vue.',
        msg1: '',
        msg2: '',
        msg3: ''
      };
    },
    methods: {
        changeMsg() {
        this.msg = "Hello world."
        this.msg1 = this.$refs.msgDiv.innerHTML
        this.$nextTick(() => {
            this.msg2 = this.$refs.msgDiv.innerHTML
        })
        this.msg3 = this.$refs.msgDiv.innerHTML
        },
        open() {
            this.$message('这是一条消息提示');
        },

        openVn() {
            const h = this.$createElement;
            this.$message({
            message: h('p', null, [
                h('span', null, '内容可以是 '),
                h('i', { style: 'color: teal' }, 'VNode')
            ])
            });
        },
        open6() {
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: '保存修改'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '停留在当前页面'
            })
          });
      }
    }

}
</script>


<style scoped>
body {
    margin: 0;
  }
</style>


