<template>
    <section>
      <el-card class="box-card">
      <h3>栏目管理</h3>
      <avue-crud :option="option"
                   :data="data"
                   :page="page"
                   @on-load="onLoad"
                   @row-save="handleSave"
                   @row-del="handleDel"
                   @row-update="handleUpdate"
                   :table-loading="tableLoading"
                   @refresh-change="refreshChange"
                   @search-change="searchChange" >

          <template slot-scope="scope" slot="menu">
            <el-button :size="scope.size" :type="scope.type">查看字段</el-button>
          </template>
        </avue-crud>
      </el-card>

    </section>  
</template>

<script>
import * as column from '@/api/column'
import { userOption } from "./option.js";
import * as tool from '@/util/tool'

  export default {
    data(){
      return {
          data: [
            {
              id: 0,
              event: '事件1',
              timeLine: 50,
              icon: 'el-icon-time',
              comment: '无'
            },
            {
              id: 1,
              event: '事件1',
              icon: 'el-icon-bell',
              timeLine: 100,
              comment: '无',
              children: [
                {
                  id: 2,
                  event: '事件2',
                  icon: 'el-icon-star-on',
                  timeLine: 10,
                  comment: '无'
                },
                {
                  id: 3,
                  event: '事件3',
                  timeLine: 90,
                  comment: '无',
                }
              ]
            }
          ],
          tableLoading: false,
          page: {
            pageSizes: [10, 20, 30, 40],
            total: 20,
            currentPage: 1,
            pageSize: 10
          },
          option: userOption,
          searchForm:{}
      }
    },
    methods: {
      onLoad(page) {
        this.page = page
        this.searchForm = page;
        this.loadColumnList()
      },
      loadColumnList () {
        this.data = []
        this.tableLoading = true
        this.searchForm.currentPage= this.page.currentPage
        this.searchForm.pageSize=this.page.pageSize
        
        column.getColumnList(this.searchForm)
          .then(res => { 
            tool.fanhui(res)
            .then(data=>{
              this.data = data.list
              this.page.total = data.total
            })
            this.tableLoading = false
        });
      },
      searchChange(params){
        this.loadColumnList()
      },
      sizeChange (val) {
        this.page.pageSize = val
        this.loadColumnList()
        // this.$message.success("行数" + val);
      },
      currentChange (val) {
        this.page.currentPage = val
        this.loadColumnList()
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
        column.addColumn(row)
          .then(res => { 
            tool.fanhui(res)
            .then(data=>{
              this.refreshChange();
            })
        });
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
        this.loadColumnList()
      }
    }
  }
</script>

<style scoped>

 
</style>
