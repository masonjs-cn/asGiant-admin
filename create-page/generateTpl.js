'use strict';
exports.table = pageName => {

  const tpl = `<template>
  <basic-container>
    <h3>${pageName}-page</h3>
    <avue-crud :option="option"
               :data="data"
               @refresh-change="refreshChange"
               @on-load="onLoad"
               :page="searchForm"
               :table-loading="tableLoading">
    </avue-crud>
  </basic-container>
</template>

<script>
import { option } from "./${pageName}-option.js";

export default {
  data() {
    return {
      option,
      data: [],
      config:[],
      tableLoading:true,
      searchForm:{
        total:0,
        indexPage:1,
        pageSize:20,
      }
    };
  },
  methods: {
    onLoad(page) {
        this.searchForm.indexPage = page.currentPage
        this.searchForm.currentPage = page.currentPage
        this.searchForm.pageSize = page.pageSize
        this.templateList()
    },
    templateList(){
      this.tableLoading = false
      this.data = []
    },
    refreshChange () {
      this.templateList()
    }
  }
};
</script>

<style scoped>
</style>
`;
  return tpl;
};

exports.form = pageName => {
  const tpl = `<template>
  <basic-container>
    <h3>${pageName}-page</h3>
   <avue-form  ref="form"
               v-model="obj"
               :option="option"
               @reset-change="emptytChange"
               @submit="submit">
    </avue-crud>
  </basic-container>
</template>

<script>
import { option } from "./${pageName}-option.js";

export default {
  data() {
    return {
      option,
      obj: {},
    };
  },
  methods: {
    emptytChange() {
      this.$message.success('清空方法回调');
    },
    submit() {
      this.$message.success('当前数据' + JSON.stringify(this.obj));
    },
    tip() {
      this.$message.success('自定义按钮');
    }
  }
};
</script>

<style scoped>
</style>
`;
  return tpl;
};

exports.js = () => {
  return `
// import {DIC} from '@/const/dic'
import * as tool from '@/util/tool'

export const option = {
    menuAlign: 'center',
    border: true,
    index: false,
    addBtn: false,
    editBtn: false,
    menu: false,
    column: [{
            label: "普通",
            prop: "taskId",
        },
        {
            label: "时间",
            prop: "createTime",
            width: 200,
            format: "yyyy-MM-dd",
            valueFormat: "yyyy-MM-dd",
            formatter: tool.dateFormat,
        },
        {
            label: "下拉列表",
            prop: "status",
            type: 'select',
            dicData: [{
                label: "提交发送",
                value: 0
            }, {
                label: "发送成功",
                value: 1
            }, {
                label: "发送失败",
                value: 2
            }]
        }
    ]
}`;
};
