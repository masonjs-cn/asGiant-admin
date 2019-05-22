<template>
  <section>
    <el-card class="box-card">
      <h3>用户管理</h3>
      <avue-crud :option="option"
                 :data="data" 
                 :page="page"
                 @on-load="onLoad"
                 @row-save="handleSave"
                 @row-del="handleDel"
                  @row-update="handleUpdate"
                 :table-loading="tableLoading"
                 @refresh-change="refreshChange"
                 @search-change="searchChange">
      </avue-crud>
    </el-card>
  </section>
</template>

<script>
import * as user from '@/api/user'
import * as role from '@/api/role'
import { userOption } from "./option.js";
export default {
  data () {
    return {
      tableLoading: false,
      page: {
        pageSizes: [10, 20, 30, 40],
        total: 20,
        currentPage: 1,
        pageSize: 10
      },
      data: [],
      option: userOption,
      searchForm:{},
    }
  },
  created () {
  },
  methods: {
    onLoad(page) {
      this.page = page
      this.searchForm = page;
      this.getRoleList();
      this.loadUserList()
    },
    loadUserList () {
      this.data = []
      this.tableLoading = true
      this.searchForm.currentPage= this.page.currentPage
      this.searchForm.pageSize=this.page.pageSize
      
      user.getUserList(this.searchForm)
        .then(res => { 
          this.data = res.data.list
          this.page.total = res.data.total
          this.tableLoading = false
      });
    },
    searchChange(params){
      this.searchForm.username = params.username
      this.loadUserList()
    },
    getRoleList(){
      let data = {
        currentPage:1,
        pageSize:1000
      }
      role.getRoleList(data)
        .then(res => {
          let data = res.data.list;
          let roleList = []
          data.forEach((element,index) => {
            roleList[index]={
              label: element.roleName,
              value: element.role
            }
          });
          this.option.column[1].dicData = roleList
      });
    },
    sizeChange (val) {
      this.page.pageSize = val
      this.loadUserList()
      // this.$message.success("行数" + val);
    },
    currentChange (val) {
      this.page.currentPage = val
      this.loadUserList()
      this.$message.success('页码' + val)
    },
    /**
     * @title 打开新增窗口
     * @detail 调用crud的handleadd方法即可
     *
     **/
    handleAdd () {
      this.$refs.crud.rowAdd()
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave (row, done) {
      // this.tableData.push(row);
      console.log('====================================')
      console.log(row)
      console.log('====================================')
      this.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
      done()
    },
    /**
     * @title 数据删除
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     *
     **/
    handleDel (row, index) {
      this.$confirm(`是否确认删除序号为${row.name}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
        })
        // .catch(err => {})
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate (row, index, done) {
      console.log('====================================')
      console.log(row)
      console.log('====================================')
      // this.tableData.splice(index, 1, row);
      this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
      })
      done()
    },
    /**
     * @title 刷新数据
     *
     **/

    refreshChange () {
      this.searchForm = {}
      this.loadUserList()
    }
  }
}
</script>
