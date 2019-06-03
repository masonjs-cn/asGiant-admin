<template>
  <div v-if="show"
       class="config">
    <el-scrollbar style="height:600px">
      <el-form label-position="top">
        <el-form-item label="标题" size="mini">
          <el-input v-model="data.label"></el-input>
        </el-form-item>
        <el-form-item label="数据绑定值" size="mini">
          <el-input v-model="data.prop"></el-input>
        </el-form-item>
        <el-form-item label="默认值" size="mini">
          <el-input v-model="data.defaultValue"></el-input>
        </el-form-item>
        <el-form-item label="占位符"
                      size="mini"
                      v-if="placeholderDic.includes(data.type)">
          <el-input v-model="data.placeholder"
                    placeholder="这里取默认值"></el-input>
        </el-form-item>
        <el-form-item label="字典"
                      size="mini"
                      v-if="selectDic.includes(data.type)">
          <draggable class="list"
                     element="ul"
                     :list="data.dicData"
                     :options="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}">
            <li v-for="(item, index) in data.dicData"
                :key="index">
              <el-input style="width:100px;"
                        size="mini"
                        v-model="item.label"></el-input>
              <el-input :style="{width: '90px'}"
                        size="mini"
                        v-model="item.value"></el-input>
              <el-button @click="handleOptionsRemove(index)"
                         circle
                         plain
                         type="danger"
                         size="mini"
                         icon="el-icon-minus"
                         style="padding: 4px;margin-left: 5px;"></el-button>

            </li>
          </draggable>
          <div style="margin-left: 22px;">
            <el-button type="text"
                       @click="handleAddOption">添加选项</el-button>
          </div>
        </el-form-item>
        <el-form-item label="格栅" size="mini">
          <el-input v-model.number="data.span"></el-input>
        </el-form-item>
        <!-- <el-form-item label="是否单独一行" size="mini">
          <el-switch v-model="data.row"
                     :active-value="true"
                     :inactive-value="false"></el-switch>
        </el-form-item>
        <el-form-item label="是否多选" size="mini"
                      v-if="multipleDic.includes(data.type)">
          <el-switch v-model="data.multiple"></el-switch>
        </el-form-item>
        <el-form-item label="最小值"  size="mini"
                      v-if="rowDic.includes(data.type)">
          <el-input-number v-model.number="data.maxRows"
                           :min="0"
                           :max="100"
                           :step="1"></el-input-number>
        </el-form-item>
        <el-form-item label="最小值"  size="mini"
                      v-if="rowDic.includes(data.type)">
          <el-input-number v-model.number="data.minRows"
                           :min="0"
                           :max="100"
                           :step="1"></el-input-number>
        </el-form-item> -->
        <el-form-item label="操作属性">
          <el-checkbox v-model="data.disabled">禁用</el-checkbox>
          <el-checkbox v-model="data.addDisplay">删除可见</el-checkbox>
          <el-checkbox v-model="data.editDisplay">编辑可见</el-checkbox>
        </el-form-item>
        <el-form-item label="步长"
                      v-if="['number'].includes(data.type)">
          <el-input-number v-model.number="data.step"
                           :min="0"
                           :max="100"
                           :step="1"></el-input-number>
        </el-form-item>
        <el-form-item label="开始时间占位内容"
                      v-if="dateRangeDic.includes(data.type)">
          <el-input v-model="data.startPlaceholder"></el-input>
        </el-form-item>
        <el-form-item label="结束时间占位内容"
                      v-if="dateRangeDic.includes(data.type)">
          <el-input v-model="data.endPlaceholder"></el-input>
        </el-form-item>
        <el-form-item label="显示格式"
                      v-if="dateDic.includes(data.type)">
          <el-input v-model="data.format"></el-input>
        </el-form-item>
        <el-form-item label="值格式"
                      v-if="dateDic.includes(data.type)">
          <el-input v-model="data.valueformat"></el-input>
        </el-form-item>
        <el-form-item label="校验">
          <el-checkbox v-model="required">必填</el-checkbox>
        </el-form-item>
      </el-form>
    </el-scrollbar>
  </div>
</template>

<script>
import Draggable from "vuedraggable";

export default {
  components: {
    Draggable
  },
  props: ["value"],
  data() {
    return {
      required: false,
      list: [],
      data: {},
      placeholderDic: [
        "",
        "number",
        "select",
        "input",
        "date",
        "datetime",
        "tree",
        "textarea",
        "week",
        "month",
        "year",
        "dates",
        "date",
        "datetime",
        "time"
      ],
      rowDic: ["textarea", "number"],
      multipleDic: ["select", "tree"],
      selectDic: ["select", "radio", "checkbox", "tree", "switch"],
      dateRangeDic: ["datetimerange", "daterange", "timerange"],
      dateDic: [
        "week",
        "month",
        "year",
        "dates",
        "date",
        "datetime",
        "time",
        "daterange",
        "datetimerange",
        "timerange"
      ]
    };
  },
  computed: {
    show() {
      if (this.data && Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    handleOptionsRemove(index) {
      this.data.dicData.splice(index, 1);
    },
    handleAddOption() {
      this.data.dicData.push({
        value: "新选项",
        label: "新选项"
      });
    }
  },
  watch: {
    data: {
      handler() {
        this.$emit("input", this.value);
      },
      deep: true,
      immediate: true
    },
    required() {
      if (this.required) {
        this.data.required = [
          {
            required: true,
            message: this.data.label + "必填项",
            trigger: "change"
          }
        ];
      } else {
        this.data.required = [];
      }
    },
    value: {
      handler() {
        this.data = this.value;
        if (!this.data.clearable) this.data.clearable = true;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  margin-top: 40px;
  li {
    list-style: none;
    margin-bottom: 5px;
  }
}
</style>

