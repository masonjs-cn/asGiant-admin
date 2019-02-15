<template>
  <div>
    <basic-container>
      <div class="page-title2">邮箱管理</div>
      <div class="tip"></div>

      <avue-crud :option="option"
                 :data="data" 
                 :page="page"
                 @on-load="onLoad"
                 :table-loading="tableLoading"
                 @search-change="searchChange"
                 @refresh-change="refreshChange">
                 
      <template slot-scope="scope"
                  slot="menu">
            <el-button size="small" type="text"
                      @click.stop="formalities(scope.row,scope.index)">添加手续费</el-button>
            <el-button size="small" type="text"
                      @click.stop="account(scope.row,scope.index)">核账</el-button>
      </template>
      
      </avue-crud>

      <el-dialog title="核账" :visible.sync="accountShow" width="40%">

        <avue-form :option="accountOption" v-model="accountForm" @submit="handleSubmit"></avue-form>

      </el-dialog>

    </basic-container>
  </div>
</template>

<script>
// import * as loanMgmt from '@/api/loanMgmt'
import {repaidMarkedOption,accountOption} from './option'
// import {getPowerKey} from '@/util/auth'
export default {
  data () {
    return {
      searchForm:{},
      data: [],
      tableLoading:true,
      option: repaidMarkedOption,
      page: {
          pageSize: 10,
      },
      accountShow:false,
      accountOption:accountOption,
      accountForm:{},
      dataInitial:[]
      // isBoss:getPowerKey("BOSS")
    }
  },
  created () {
  },
  methods: {
    refreshChange(){
      this.searchForm = {}
      this.refused();
    },
    onLoad(page) {
      page.dataTotal = page.total
      this.page = page
      this.refused()
    },
      // 获取列表
    refused() {
        this.tableLoading = true;
        this.searchForm.paging=this.page;
      //   loanMgmt.incomeAndExpensesCount(this.searchForm)
      //   .then(res => { 
      //      const data=res.data.data;
      //      this.dataInitial = data.list;
      //      let dataExt=data.list;

      //      for (let index = 0; index < dataExt.length; index++) {

      //       if (dataExt[index].collatePaymoneyStatus === 0) {
      //         dataExt[index].collatePaymoneyExt =  dataExt[index].countPaymoney
      //       }else{
      //         dataExt[index].collatePaymoneyExt = dataExt[index].collatePaymoney
      //       }

      //       if (dataExt[index].collateOnlineRepaymentMoneyStatus === 0) {
      //          dataExt[index].collateOnlineRepaymentMoneyExt = dataExt[index].countOnlineRepaymentMoney
      //       }else{
      //         dataExt[index].collateOnlineRepaymentMoneyExt = dataExt[index].collateOnlineRepaymentMoney
      //       }

      //       if (dataExt[index].collateMarkRepaymentMoneyStatus === 0) {
      //          dataExt[index].collateMarkRepaymentMoneyExt = dataExt[index].countMarkRepaymentMoney              
      //       }else{
      //         dataExt[index].collateMarkRepaymentMoneyExt =  dataExt[index].collateMarkRepaymentMoney
      //       }
      //      }

      //      this.data = dataExt;
      //      this.page = data.paging;
      //      this.page.total =  data.paging.dataTotal;
      //      this.tableLoading = false;
      // });

    },
    searchChange(params) {
      this.searchForm = {}
      this.page = { 
          currentPage: 1,
          dataTotal: 0,
          total:0,
          pageSize:this.page.pageSize
      }
      if (params.countTime&&params.countTime[0]===""){
        delete params.countTime
      }
      this.searchForm = Object.assign(params, this.searchForm)
      this.refused()
    },
    account(row,index){
      this.accountShow = true;
      this.accountForm=this.dataInitial[index];
      console.log('====================================');
      console.log(this.dataInitial[index]);
      console.log('====================================');
    },
    handleSubmit(){
      // loanMgmt.collateBill(this.accountForm)
      // .then(res=>{
      //    const data=res.data;
      //    if (data.code===0) {
      //       this.$message({
      //         type: 'success',
      //         message: "成功"
      //       });
      //       this.accountShow = false;
      //       this.refreshChange()
      //     }else{
      //       this.$message({
      //         type: 'error',
      //         message: data.message
      //       });
      //     }
      // })

    },
   //  添加手续费
   formalities(){
      
    }
  }
}
</script>

<style>
.page-title2 {
  font-weight: bold;
  font-size: 18px;
  line-height: 36px;
}
.tip{
  font-size: 13px;
  line-height: 36px;
  margin-bottom: 20px;
}
</style>