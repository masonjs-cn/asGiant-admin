<template>
  <div class="ceng">
    <draggable v-model="list"
               :options="{}">
      <div class="item"
           :class="{'is-active':active===index}"
           v-for="(item,index) in list"
           @click="handleClick(item,index)"
           :key="index">
        <span class="title">{{item.label}}({{item.prop}})</span>
        <span class="close"
              @click.stop="handleDel(index)">x</span>
      </div>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
export default {
  components: {
    Draggable
  },
  data() {
    return {
      active: -1,
      list: []
    };
  },
  props: {
    value: {}
  },
  watch: {
    list: {
      handler() {
        this.$emit("input", this.list);
      },
      deep: true
    },
    value: {
      handler() {
        this.list = this.value;
      },
      deep: true
    }
  },
  computed: {
    columnOption() {
      return this.value.column;
    }
  },
  methods: {
    handleClick(item, index) {
      this.active = index;
      this.$emit("item-click", item, index);
    },
    handleDel(index) {
      this.list.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.ceng {
  .item {
    cursor: pointer;
    position: relative;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    height: 40px;
    line-height: 40px;
    border: 1px solid #eee;
    border-radius: 5px;
    &.is-active {
      border-color: red;
    }
  }
  .title {
    padding: 2px 20px;
    font-size: 10px;
  }
  .close {
    position: absolute;
    right: 10px;
  }
}
</style>
