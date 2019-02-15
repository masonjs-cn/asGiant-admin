<template>
  <section>
    <el-card class="box-card">
      <avue-crud :option="option"
                 :data="data" 
                 :page="page"
                 @on-load="onLoad"
                 @row-save="handleSave"
                 @row-del="handleDel"
                 :table-loading="tableLoading"
                 @refresh-change="refreshChange"
                 @row-dblclick="handleRowClick">

        <template slot-scope="scope" slot="menu">
              <el-button size="small" type="text"
                        @click.stop="edit(scope.row,scope.index)">修改</el-button>
        </template>

      </avue-crud>

      <el-dialog title="修改" :visible.sync="accountShow">

        <avue-form :option="accountOption" v-model="accountForm" @submit="handleUpdate"></avue-form>

      </el-dialog>

    </el-card>
  </section>
</template>

<script>
import * as Column from '@/api/column'
import * as dataCenter from '@/api/dataCenter'
import {pageConfig,accountOption} from './pageConfig'
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
      option: pageConfig,
      searchForm:{},
      accountShow:false,
      accountOption:accountOption,
      accountForm:{}
    }
  },
  created () {
  },
  methods: {
    // 加载函数
    onLoad(page) {
      this.page = page
      this.searchForm = page;
      this.loadUserList()
    },
    // 主函数
    loadUserList () {
      this.tableLoading = true
      this.searchForm = {
        'currentPage': this.page.currentPage,
        'pageSize': this.page.pageSize
      }
      Column.CheckTableList(this.searchForm)
        .then(res => {
          this.data = res.data.data
          this.page.total = res.data.total
          this.tableLoading = false
      });
    },
    // 列表
    sizeChange (val) {
      this.page.pageSize = val
      this.loadUserList()
    },
    // 页码
    currentChange (val) {
      this.page.currentPage = val
      this.loadUserList()
    },
    /**
     * @title 用户保存
     **/
    handleSave (row, done) {
      let data = {
        'column': row.column.slice(5),
        'columnName': row.columnName
      }
      dataCenter.newTable(data)
        .then(res => {
          res = res.data;
          if (res.flag === 1) {
            this.$message({
              showClose: true,
              message: '添加成功',
              type: 'success'
            })
          done()
          this.loadUserList()
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'error'
            })
          }
      });
    },
    /**
     * @title 数据删除
     **/
    handleDel (row) {
      if (!this.getTableRole(row)) {return}
      this.$confirm(`是否确认删除数据库名${row.column}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let data = {
            column: row.column.slice(5)
          }
          dataCenter.deleTable(data)
            .then(res => {
            res = res.data
            if (res.flag === 1) {
              this.$message({
                showClose: true,
                message: '删除成功',
                type: 'success'
              })
              this.loadUserList()
            } else {
              this.$message({
                showClose: true,
                message: res.msg,
                type: 'error'
              })
            }
          })
        })
        // .catch(err => {})
    },
    edit(row){
      if (!this.getTableRole(row)) {return}
      this.accountShow = true;
      this.accountForm=row;
    },
    /**
     * @title 数据更新
     **/
    handleUpdate () {
      let data = {
        'infoJson': {
          'column':  this.accountForm.column.slice(5),
          'columnName':  this.accountForm.columnName
        },
        'columnid':  this.accountForm.columnid
      }
      dataCenter.updateTable(data)
        .then(res => {

        res = res.data
        if (res.flag === 1) {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
          // done()
          this.accountShow = false;
          this.loadUserList()
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: 'error'
          })
        }
      })
    },

    /**
     * @title 刷新数据
     **/
    refreshChange () {
      this.searchForm = {}
      this.loadUserList()
    },
    getTableRole(row){
      if (!(row.column.includes('zmyq_'))) {
        this.$message({
          showClose: true,
          message: '不能修改系统模块',
          type: 'error'
        })
        return false
      }
      return true
    },
    handleRowClick (row) {
      if (!this.getTableRole(row)) {return}
      this.$router.push({path:'/fieldlist',query:{columnid:row.$columnid}})
    }
  }
}
</script>
