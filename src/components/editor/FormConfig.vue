<template>
  <div class="form-config-container">
    <el-form label-position="top">
      <el-form-item label="标签对齐方式">
        <el-radio-group v-model="value.labelPosition" size="mini">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="提交按钮位置">
        <el-radio-group v-model="value.submitPosition" size="mini">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="center">居中对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="表单字段宽度" size="mini">
        <el-input-number v-model="value.labelWidth"
                         :min="0"
                         :max="200"
                         :step="10"></el-input-number>
      </el-form-item>
      <el-form-item label="提交按钮文字" size="mini">
        <el-input v-model="value.submitText"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>
