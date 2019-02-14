<template>
  <section>
    <el-card class="box-card">
      <avue-crud :option="option"
                 :data="data" 
                 :page="page"
                 @on-load="onLoad"
                 @row-save="handleSave"
                 @row-del="handleDel"
                  @row-update="handleUpdate"
                 :table-loading="tableLoading"
                 @refresh-change="refreshChange">
      </avue-crud>
    </el-card>
  </section>
</template>

<script>
import * as Column from '@/api/column'
import * as dataCenter from '@/api/dataCenter'
import {pageConfig} from './pageConfig'
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
      searchForm:{}
    }
  },
  created () {
  },
  methods: {
    onLoad(page) {
      this.page = page
      this.searchForm = page;
      this.loadUserList()
    },
    selectionChange (list) {
      this.$message.success('选中的数据' + JSON.stringify(list))
    },
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
    sizeChange (val) {
      this.page.pageSize = val
      this.loadUserList()
    },
    currentChange (val) {
      this.page.currentPage = val
      this.loadUserList()
      this.$message.success('页码' + val)
    },
    /**
     * @title 打开新增窗口
    **/
    handleAdd () {
      this.$refs.crud.rowAdd()
    },
    /**
     * @title 获取数据
    **/
    handleList () {
      this.tableLoading = true
      this.$store
        .dispatch('GetUserData', { page: `${this.tablePage}` })
        .then(data => {
          setTimeout(() => {
            this.tableData = data.tableData
            this.page = {
              total: data.total,
              pageSize: data.pageSize
            }
            this.tableLoading = false
          }, 1000)
        })
    },
    /**
     * @title 数据添加
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
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     *
     **/
    handleDel (row) {
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
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate (row, index, done) {
      let data = {
        'infoJson': {
          'column': row.column.slice(5),
          'columnName': row.columnName
        },
        'columnid': row.columnid
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
          done()
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
     *
     **/

    refreshChange () {
      this.searchForm = {}
      this.loadUserList()
    }

  }
}
</script>
