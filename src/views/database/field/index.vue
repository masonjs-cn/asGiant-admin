<template>
 <el-card class="box-card">
  <h3>{{info.columnName}}表-字段管理</h3>

  <el-checkbox v-model="resultForm.addBtn">增加按钮</el-checkbox>
  <el-checkbox v-model="resultForm.editBtn">编辑按钮</el-checkbox>
  <el-checkbox v-model="resultForm.delBtn">删除按钮</el-checkbox>
  <el-checkbox v-model="resultForm.columnBtn">列显隐按钮</el-checkbox>
  <el-checkbox v-model="resultForm.filterBtn">过滤按钮</el-checkbox>

  <el-container class="home">
    <el-aside style="wdith: 250px;">
      <div class="components-list">
        <div class="widget-cate">基础字段</div>
        <draggable element="ul"
                   @end="handleEnd"
                   v-model="basicComponents"
                   :options="{group:{ name:'avue', pull:'clone',put:false},sort:false, ghostClass: 'avue-ghost'}">

          <li class="form-edit-widget-label"
              v-for="(item, index) in basicComponents"
              :key="index">
            <a>
              <span>{{item.label}}</span>
            </a>
          </li>
        </draggable>

        <div class="widget-cate">高级字段</div>
        <draggable element="ul"
                   v-model="advanceComponents"
                   @end="handleEnd"
                   :options="{group:{ name:'avue', pull:'clone',put:false},sort:false, ghostClass: 'avue-ghost'}">

          <li class="form-edit-widget-label"
              v-for="(item, index) in advanceComponents"
              :key="index">
            <a>
              <span>{{item.label}}</span>
            </a>
          </li>
        </draggable>

      </div>

    </el-aside>

    <!-- 导出、导入、生成 -->
    <el-container class="center-container"
                  direction="vertical">
      <el-header class="btn-bar"
                 style="height: 45px;">

        <el-button type="text"
                   size="mini"
                   @click="handleExportJson">导入</el-button>
        <el-button type="text"
                   size="mini"
                   @click="handleGenerateJson">生成</el-button>
        <el-button type="text"
                   size="mini"
                   @click="handleClearForm">清空</el-button>
      </el-header>
      <el-main>
        <draggable class="main"
                   v-model="columnResult"
                   :options="{animation: 0,ghostClass: 'avue-ghost',group: {put: ['avue'],}}">
          <avue-form :option="resultForm"
                     v-model="form"
                     @submit="submitField"
                     class="main"> </avue-form>
        </draggable>
      </el-main>
    </el-container>

    <!-- 属性管理 -->
    <el-aside class="widget-config-container">
      
      <el-radio-group v-model="configTab"
                      size=mini>
        <el-radio-button label="ceng">字段图层</el-radio-button>
        <el-radio-button label="widget">字段属性</el-radio-button>
        <el-radio-button label="form">表单属性</el-radio-button>
      </el-radio-group>

      <div class="config-content">
        <ceng-config v-show="configTab==='ceng'"
                     v-model="resultForm.column"
                     @item-click="itemClick"></ceng-config>
        <widget-config v-show="configTab==='widget'"
                       v-model="columnObj"></widget-config>
        <form-config v-show="configTab==='form'"
                     v-model="resultForm"></form-config>
      </div>

    </el-aside>

    <cus-dialog :visible="previewVisible"
                @on-close="previewVisible = false"
                @on-submit="handleExport"
                ref="widgetPreview"
                width="1000px">
      <div id="preview"
           style="height: 400px;">
      </div>

    </cus-dialog>

    <cus-dialog :visible="jsonVisible"
                @on-close="jsonVisible = false"
                ref="jsonPreview"
                width="800px"
                @on-submit="handSubmit"
                form>
      <div id="jsoneditor"
           style="height: 400px;">
      </div>

    </cus-dialog>
    
  </el-container>
 </el-card>
</template>

<script>
import Draggable from "vuedraggable";
import FormConfig from "@/components/editor/FormConfig";
import WidgetConfig from "@/components/editor/WidgetConfig";
import CengConfig from "@/components/editor/CengConfig";
import CusDialog from "@/components/editor/CusDialog";
import {
  basicComponents,
  layoutComponents,
  advanceComponents
} from "@/config/componentsConfig.js";
import { loadJs, loadCss } from "@/util/editor.js";
import * as tool from '@/util/tool'
export default {
  name: "home",
  components: {
    Draggable,
    WidgetConfig,
    CengConfig,
    CusDialog,
    FormConfig
  },
  data() {
    return {
      basicComponents,
      layoutComponents,
      advanceComponents,
      exportForm: "",
      resultForm: {
        labelWidth: 110,
        submitPosition: "center",
        submitText: "提交",
        labelPosition: "right",
        column: []
      },
      columnResult: [],
      columnObj: {},
      columnIndex: -1,
      form: {},
      configTab: "ceng",
      previewVisible: false,
      jsonVisible: false,
      info:{}
    };
  },
  watch: {
    columnObj: {
      handler() {
        this.$set(this.resultForm.column, this.columnIndex, this.columnObj);
      },
      deep: true
    },
    resultForm: {
      handler() {
        this.$store.commit("set_data", this.resultForm);
      },
      deep: true
    }
  },
  created () {
    this.info=this.$route.query
  },
  mounted() {
    const data = this.$store.state.data;
    if (data) {
      this.resultForm = data;
    }
  },
  methods: {
    handleClearForm() {
      this.resultForm = {
        column: []
      };
      this.$message.success("清空成功");
    },
    handleExportJson() {
      this.previewVisible = true;
      this.$nextTick(() => {
        this.exportForm = new window.JSONEditor(
          document.getElementById("preview"),
          {
            mode: "code"
          }
        );
      });
    },
    handSubmit(m){
      this.jsonVisible = false
      let a = []
      let arrayValue = []
      this.resultForm.column.forEach(element => {
        a.push(element);
        arrayValue.push(element.prop)
      });

      if (tool.isRepeat(arrayValue)) {
        this.$message.error("字段不允许有重复");
        return
      }

    },
    submitField(){
    },
    handleExport() {
      try {
        JSON.stringify(this.exportForm.get());
      } catch (e) {
        this.$message.error("导入数据错误");
        return;
      }
      this.resultForm = this.exportForm.get();
      this.$message.success("导入成功");
      this.previewVisible = false;
    },
    handleEnd(evt) {
      if (evt.to.className !== "main") return;
      let obj = this.deepClone(this.columnResult[0]);
      obj.prop = obj.prop + new Date().getTime();
      this.resultForm.column.push(obj);
    },
    itemClick(item, index) {
      this.columnObj = this.resultForm.column[index];
      this.columnIndex = index;
      this.configTab = "widget";
    },
    handleGenerateJson() {
      this.jsonVisible = true;
      this.$nextTick(() => {
        const editor = new window.JSONEditor(
          document.getElementById("jsoneditor"),
          {
            mode: "code"
          }
        );
        let result = { ...this.resultForm };
        editor.set(result);
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/editor/cover.scss";
@import "@/styles/editor/index.scss";
body,
html {
  height: 100%;
}
.home {
  height: 100%;
  margin-top: 15px;
  overflow: hidden;
}
.main {
  .el-row {
    overflow: hidden;
    overflow-y: scroll;
  }
}
.avue-form__option {
  top: 0 !important;
}
.components-list {
  user-select: none;
}
.config-content {
  margin-top: 20px;
}
</style>
