<template>
  <div class="app-container calendar-list-container">
    <basic-container>
      <h3>菜单管理</h3>
      <div class="filter-container">
        <el-button-group>
          <el-button type="primary"
                     icon="plus"
                     size="mini"
                     @click="handlerAdd">添加
          </el-button>
          <el-button type="primary"
                     icon="edit"
                     size="mini"
                     @click="handlerEdit">编辑
          </el-button>
          <el-button type="primary"
                     icon="delete"
                     size="mini"
                     @click="handleDelete">删除
          </el-button>
        </el-button-group>
      </div>

      <el-row>
        <el-col :span="8"
                style='margin-top:15px;'>
          <el-tree class="filter-tree"
                   node-key="id"
                   highlight-current
                   :data="treeData"
                   :default-expanded-keys="aExpandedKeys"
                   :filter-node-method="filterNode"
                   :props="defaultProps"
                   @node-click="getNodeData"
                   @node-expand="nodeExpand"
                   @node-collapse="nodeCollapse">
          </el-tree>
        </el-col>
        <el-col :span="16"
                style='margin-top:15px;'>
          <el-card class="box-card">
            <el-form :label-position="labelPosition"
                     label-width="80px"
                     :model="form"
                     :rules="rules"
                     ref="form">
              <el-form-item label="父级节点"
                            size="mini"
                            prop="parentId">
                <el-input v-model="form.parentId"
                          :disabled="true"
                          placeholder="请输入父级节点"></el-input>
              </el-form-item>
              <el-form-item label="节点ID"
                            size="mini"
                            prop="menuId">
                <el-input v-model="form.menuId" type="number"
                          :disabled="formEdit || formStatus === 'update'"
                          placeholder="请输入节点ID"></el-input>
              </el-form-item>
              <el-form-item label="标题"
                            size="mini"
                            prop="name">
                <el-input v-model="form.name"
                          :disabled="formEdit"
                          placeholder="请输入标题"></el-input>
              </el-form-item>
              <el-form-item label="类型"
                            size="mini"
                            prop="type">
                <el-select class="filter-item"
                           v-model="form.type"
                           :disabled="formEdit"
                           placeholder="请输入资源请求类型">
                  <el-option v-for="item in  typeOptions"
                             :key="item"
                             :label="item | typeFilter"
                             :value="item"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="权限标识"
                            size="mini"
                            prop="permission" v-if="form.type === '1'">
                <el-input v-model="form.permission"
                          :disabled="formEdit"
                          placeholder="请输入权限标识"></el-input>
              </el-form-item>
              <el-form-item label="图标" v-if="form.type === '0'"
                            size="mini"
                            prop="icon">
                <avue-icon-select v-model="form.icon"
                                  :iconList="iconList"
                                  :disabled="formEdit"
                                  placeholder="请输入图标"></avue-icon-select>
              </el-form-item>
              <el-form-item label="排序" v-if="form.type === '0'"
                            size="mini"
                            prop="sort">
                <el-input type="number"
                          v-model="form.sort"
                          :disabled="formEdit"
                          placeholder="请输入排序"></el-input>
              </el-form-item>
              <el-form-item label="前端组件" v-if="form.type === '0'"
                            size="mini"
                            prop="component">
                <el-input v-model="form.component"
                          :disabled="formEdit"
                          placeholder="请输入描述"></el-input>
              </el-form-item>
              <el-form-item label="前端地址" v-if="form.type === '0'"
                            size="mini"
                            prop="component">
                <el-input v-model="form.path"
                          :disabled="formEdit"
                          placeholder="iframe嵌套地址"></el-input>
              </el-form-item>
              <el-form-item label="路由缓冲" v-if="form.type === '0'"
                            size="mini"
                            prop="component">
                <el-switch v-model="form.keepAlive"
                           :disabled="formEdit"
                           active-color="#13ce66"
                           inactive-color="#ff4949"
                           :active-value='"0"'
                           :inactive-value='"1"'>
                </el-switch>
              </el-form-item>
              <el-form-item size="mini" v-if="formStatus === 'update'">
                <el-button type="primary"
                           @click="update">更新
                </el-button>
                <el-button @click="onCancel">取消</el-button>
              </el-form-item>
              <el-form-item size="mini" v-if="formStatus === 'create'">
                <el-button type="primary"
                           size="mini"
                           @click="create">保存
                </el-button>
                <el-button @click="onCancel" size="mini">取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </basic-container>
  </div>
</template>

<script>
  import {addObj, delObj, fetchMenuTree, getObj, putObj} from "@/api//menu";
  import {mapGetters} from "vuex";
  import iconList from "@/const/iconList";

  export default {
    name: "menu",
    data() {
      return {
        iconList: iconList,
        list: null,
        total: null,
        formEdit: true,
        formAdd: true,
        formStatus: "",
        showElement: false,
        typeOptions: ["0", "1"],
        listQuery: {
          name: undefined
        },
        treeData: [],
        oExpandedKey: {
          // key (from tree id) : expandedOrNot boolean
        },
        oTreeNodeChildren: {
          // id1 : [children] (from tree node id1)
          // id2 : [children] (from tree node id2)
        },
        aExpandedKeys: [],
        defaultProps: {
          children: "children",
          label: "name"
        },
        labelPosition: "right",
        form: {
          permission: undefined,
          name: undefined,
          menuId: undefined,
          parentId: undefined,
          icon: undefined,
          sort: undefined,
          component: undefined,
          type: undefined,
          path: undefined
        },
        currentId: -1,
        rules: {
          menuId: [{required: true, message: '节点ID不合法', trigger: 'blur'}],
          name: [{required: true, message: '标题不合法', trigger: 'blur'}],
          type: [{required: true, message: '标题不合法', trigger: 'blur'}],
        }
      };
    },
    filters: {
      typeFilter(type) {
        const typeMap = {
          0: "菜单",
          1: "按钮"
        };
        return typeMap[type];
      }
    },
    created() {
      this.getList();
      this.menuManager_btn_add = this.permissions["sys_menu_add"];
      this.menuManager_btn_edit = this.permissions["sys_menu_edit"];
      this.menuManager_btn_del = this.permissions["sys_menu_del"];
    },
    computed: {
      ...mapGetters(["elements", "permissions"])
    },
    methods: {
      getList() {
        this.treeData = [{
            "id": 1000,
            "parentId": -1,
            "children": [{
                    "id": 1100,
                    "parentId": 1000,
                    "children": [{
                            "id": 1103,
                            "parentId": 1100,
                            "children": [

                            ],
                            "icon": null,
                            "name": "用户删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_user_del",
                            "type": null,
                            "label": "用户删除",
                            "sort": null
                        },
                        {
                            "id": 1102,
                            "parentId": 1100,
                            "children": [

                            ],
                            "icon": null,
                            "name": "用户修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_user_edit",
                            "type": null,
                            "label": "用户修改",
                            "sort": null
                        },
                        {
                            "id": 1101,
                            "parentId": 1100,
                            "children": [

                            ],
                            "icon": null,
                            "name": "用户新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_user_add",
                            "type": null,
                            "label": "用户新增",
                            "sort": null
                        }
                    ],
                    "icon": "icon-yonghuguanli",
                    "name": "用户管理",
                    "spread": false,
                    "path": "user",
                    "component": "views/admin/user/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "1",
                    "code": null,
                    "type": null,
                    "label": "用户管理",
                    "sort": null
                },
                {
                    "id": 1200,
                    "parentId": 1000,
                    "children": [{
                            "id": 1203,
                            "parentId": 1200,
                            "children": [

                            ],
                            "icon": null,
                            "name": "菜单删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_menu_del",
                            "type": null,
                            "label": "菜单删除",
                            "sort": null
                        },
                        {
                            "id": 1202,
                            "parentId": 1200,
                            "children": [

                            ],
                            "icon": null,
                            "name": "菜单修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_menu_edit",
                            "type": null,
                            "label": "菜单修改",
                            "sort": null
                        },
                        {
                            "id": 1201,
                            "parentId": 1200,
                            "children": [

                            ],
                            "icon": null,
                            "name": "菜单新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_menu_add",
                            "type": null,
                            "label": "菜单新增",
                            "sort": null
                        }
                    ],
                    "icon": "icon-caidanguanli",
                    "name": "菜单管理",
                    "spread": false,
                    "path": "menu",
                    "component": "views/admin/menu/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": null,
                    "type": null,
                    "label": "菜单管理",
                    "sort": null
                },
                {
                    "id": 1300,
                    "parentId": 1000,
                    "children": [{
                            "id": 1303,
                            "parentId": 1300,
                            "children": [

                            ],
                            "icon": null,
                            "name": "角色删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_role_del",
                            "type": null,
                            "label": "角色删除",
                            "sort": null
                        },
                        {
                            "id": 1304,
                            "parentId": 1300,
                            "children": [

                            ],
                            "icon": null,
                            "name": "分配权限",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_role_perm",
                            "type": null,
                            "label": "分配权限",
                            "sort": null
                        },
                        {
                            "id": 1302,
                            "parentId": 1300,
                            "children": [

                            ],
                            "icon": null,
                            "name": "角色修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_role_edit",
                            "type": null,
                            "label": "角色修改",
                            "sort": null
                        },
                        {
                            "id": 1301,
                            "parentId": 1300,
                            "children": [

                            ],
                            "icon": null,
                            "name": "角色新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_role_add",
                            "type": null,
                            "label": "角色新增",
                            "sort": null
                        }
                    ],
                    "icon": "icon-jiaoseguanli",
                    "name": "角色管理",
                    "spread": false,
                    "path": "role",
                    "component": "views/admin/role/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": null,
                    "type": null,
                    "label": "角色管理",
                    "sort": null
                },
                {
                    "id": 1400,
                    "parentId": 1000,
                    "children": [{
                            "id": 1403,
                            "parentId": 1400,
                            "children": [

                            ],
                            "icon": null,
                            "name": "部门删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_dept_del",
                            "type": null,
                            "label": "部门删除",
                            "sort": null
                        },
                        {
                            "id": 1402,
                            "parentId": 1400,
                            "children": [

                            ],
                            "icon": null,
                            "name": "部门修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_dept_edit",
                            "type": null,
                            "label": "部门修改",
                            "sort": null
                        },
                        {
                            "id": 1401,
                            "parentId": 1400,
                            "children": [

                            ],
                            "icon": null,
                            "name": "部门新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_dept_add",
                            "type": null,
                            "label": "部门新增",
                            "sort": null
                        }
                    ],
                    "icon": "icon-web-icon-",
                    "name": "部门管理",
                    "spread": false,
                    "path": "dept",
                    "component": "views/admin/dept/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": null,
                    "type": null,
                    "label": "部门管理",
                    "sort": null
                },
                {
                    "id": 1500,
                    "parentId": 1000,
                    "children": [{
                            "id": 1501,
                            "parentId": 1500,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "租户新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "admin_systenant_add",
                            "type": null,
                            "label": "租户新增",
                            "sort": null
                        },
                        {
                            "id": 1502,
                            "parentId": 1500,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "租户修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "admin_systenant_edit",
                            "type": null,
                            "label": "租户修改",
                            "sort": null
                        },
                        {
                            "id": 1503,
                            "parentId": 1500,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "租户删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "admin_systenant_del",
                            "type": null,
                            "label": "租户删除",
                            "sort": null
                        }
                    ],
                    "icon": "icon-erji-zuhushouye",
                    "name": "租户管理",
                    "spread": false,
                    "path": "systenant",
                    "component": "views/admin/tenant/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": "",
                    "type": null,
                    "label": "租户管理",
                    "sort": null
                }
            ],
            "icon": "icon-quanxianguanli",
            "name": "权限管理",
            "spread": false,
            "path": "/upms",
            "component": "Layout",
            "authority": null,
            "redirect": null,
            "keepAlive": "0",
            "code": null,
            "type": null,
            "label": "权限管理",
            "sort": null
        },
        {
            "id": 2000,
            "parentId": -1,
            "children": [{
                    "id": 2100,
                    "parentId": 2000,
                    "children": [{
                        "id": 2101,
                        "parentId": 2100,
                        "children": [

                        ],
                        "icon": null,
                        "name": "日志删除",
                        "spread": false,
                        "path": null,
                        "component": null,
                        "authority": null,
                        "redirect": null,
                        "keepAlive": "0",
                        "code": "sys_log_del",
                        "type": null,
                        "label": "日志删除",
                        "sort": null
                    }],
                    "icon": "icon-rizhiguanli",
                    "name": "日志管理",
                    "spread": false,
                    "path": "log",
                    "component": "views/admin/log/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": null,
                    "type": null,
                    "label": "日志管理",
                    "sort": null
                },
                {
                    "id": 2200,
                    "parentId": 2000,
                    "children": [{
                            "id": 2201,
                            "parentId": 2200,
                            "children": [

                            ],
                            "icon": null,
                            "name": "字典删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_dict_del",
                            "type": null,
                            "label": "字典删除",
                            "sort": null
                        },
                        {
                            "id": 2202,
                            "parentId": 2200,
                            "children": [

                            ],
                            "icon": null,
                            "name": "字典新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_dict_add",
                            "type": null,
                            "label": "字典新增",
                            "sort": null
                        },
                        {
                            "id": 2203,
                            "parentId": 2200,
                            "children": [

                            ],
                            "icon": null,
                            "name": "字典修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_dict_edit",
                            "type": null,
                            "label": "字典修改",
                            "sort": null
                        }
                    ],
                    "icon": "icon-navicon-zdgl",
                    "name": "字典管理",
                    "spread": false,
                    "path": "dict",
                    "component": "views/admin/dict/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": null,
                    "type": null,
                    "label": "字典管理",
                    "sort": null
                },
                {
                    "id": 2210,
                    "parentId": 2000,
                    "children": [{
                            "id": 2211,
                            "parentId": 2210,
                            "children": [

                            ],
                            "icon": null,
                            "name": "参数新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "admin_syspublicparam_add",
                            "type": null,
                            "label": "参数新增",
                            "sort": null
                        },
                        {
                            "id": 2212,
                            "parentId": 2210,
                            "children": [

                            ],
                            "icon": null,
                            "name": "参数删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "admin_syspublicparam_del",
                            "type": null,
                            "label": "参数删除",
                            "sort": null
                        },
                        {
                            "id": 2213,
                            "parentId": 2210,
                            "children": [

                            ],
                            "icon": null,
                            "name": "参数编辑",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "admin_syspublicparam_edit",
                            "type": null,
                            "label": "参数编辑",
                            "sort": null
                        }
                    ],
                    "icon": "icon-canshu",
                    "name": "参数管理",
                    "spread": false,
                    "path": "param",
                    "component": "views/admin/param/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "1",
                    "code": null,
                    "type": null,
                    "label": "参数管理",
                    "sort": null
                },
                {
                    "id": 2300,
                    "parentId": 2000,
                    "children": [

                    ],
                    "icon": "icon-weibiaoti46",
                    "name": "代码生成",
                    "spread": false,
                    "path": "gen",
                    "component": "views/gen/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": "",
                    "type": null,
                    "label": "代码生成",
                    "sort": null
                },
                {
                    "id": 2900,
                    "parentId": 2000,
                    "children": [

                    ],
                    "icon": "icon-msnui-supervise",
                    "name": "服务配置",
                    "spread": false,
                    "path": "https://pigx.pig4cloud.com/nacos",
                    "component": null,
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "1",
                    "code": null,
                    "type": null,
                    "label": "服务配置",
                    "sort": null
                },
                {
                    "id": 2800,
                    "parentId": 2000,
                    "children": [{
                            "id": 2820,
                            "parentId": 2800,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "任务修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "job_sys_job_edit",
                            "type": null,
                            "label": "任务修改",
                            "sort": null
                        },
                        {
                            "id": 2860,
                            "parentId": 2800,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "任务刷新",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "job_sys_job_refresh_job",
                            "type": null,
                            "label": "任务刷新",
                            "sort": null
                        },
                        {
                            "id": 2850,
                            "parentId": 2800,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "任务开始",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "job_sys_job_start_job",
                            "type": null,
                            "label": "任务开始",
                            "sort": null
                        },
                        {
                            "id": 2840,
                            "parentId": 2800,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "任务暂停",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "job_sys_job_shutdown_job",
                            "type": null,
                            "label": "任务暂停",
                            "sort": null
                        },
                        {
                            "id": 2830,
                            "parentId": 2800,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "任务删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "job_sys_job_del",
                            "type": null,
                            "label": "任务删除",
                            "sort": null
                        },
                        {
                            "id": 2810,
                            "parentId": 2800,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "任务新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "job_sys_job_add",
                            "type": null,
                            "label": "任务新增",
                            "sort": null
                        }
                    ],
                    "icon": "icon-guanwangfangwen",
                    "name": "Quartz管理",
                    "spread": false,
                    "path": "job-manage",
                    "component": "views/daemon/job-manage/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": "",
                    "type": null,
                    "label": "Quartz管理",
                    "sort": null
                },
                {
                    "id": 2400,
                    "parentId": 2000,
                    "children": [{
                            "id": 2401,
                            "parentId": 2400,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "客户端新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_client_add",
                            "type": null,
                            "label": "客户端新增",
                            "sort": null
                        },
                        {
                            "id": 2402,
                            "parentId": 2400,
                            "children": [

                            ],
                            "icon": null,
                            "name": "客户端修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_client_edit",
                            "type": null,
                            "label": "客户端修改",
                            "sort": null
                        },
                        {
                            "id": 2403,
                            "parentId": 2400,
                            "children": [

                            ],
                            "icon": null,
                            "name": "客户端删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_client_del",
                            "type": null,
                            "label": "客户端删除",
                            "sort": null
                        }
                    ],
                    "icon": "icon-shouji",
                    "name": "终端管理",
                    "spread": false,
                    "path": "client",
                    "component": "views/admin/client/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": "",
                    "type": null,
                    "label": "终端管理",
                    "sort": null
                },
                {
                    "id": 2500,
                    "parentId": 2000,
                    "children": [{
                            "id": 2501,
                            "parentId": 2500,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "密钥新增",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_social_details_add",
                            "type": null,
                            "label": "密钥新增",
                            "sort": null
                        },
                        {
                            "id": 2502,
                            "parentId": 2500,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "密钥修改",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_social_details_edit",
                            "type": null,
                            "label": "密钥修改",
                            "sort": null
                        },
                        {
                            "id": 2503,
                            "parentId": 2500,
                            "children": [

                            ],
                            "icon": "1",
                            "name": "密钥删除",
                            "spread": false,
                            "path": null,
                            "component": null,
                            "authority": null,
                            "redirect": null,
                            "keepAlive": "0",
                            "code": "sys_social_details_del",
                            "type": null,
                            "label": "密钥删除",
                            "sort": null
                        }
                    ],
                    "icon": "icon-miyue",
                    "name": "密钥管理",
                    "spread": false,
                    "path": "social",
                    "component": "views/admin/social/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": "",
                    "type": null,
                    "label": "密钥管理",
                    "sort": null
                },
                {
                    "id": 2600,
                    "parentId": 2000,
                    "children": [{
                        "id": 2601,
                        "parentId": 2600,
                        "children": [

                        ],
                        "icon": null,
                        "name": "令牌删除",
                        "spread": false,
                        "path": null,
                        "component": null,
                        "authority": null,
                        "redirect": null,
                        "keepAlive": "0",
                        "code": "sys_token_del",
                        "type": null,
                        "label": "令牌删除",
                        "sort": null
                    }],
                    "icon": "icon-denglvlingpai",
                    "name": "令牌管理",
                    "spread": false,
                    "path": "token",
                    "component": "views/admin/token/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": null,
                    "type": null,
                    "label": "令牌管理",
                    "sort": null
                },
                {
                    "id": 2700,
                    "parentId": 2000,
                    "children": [

                    ],
                    "icon": "icon-luyou",
                    "name": "动态路由",
                    "spread": false,
                    "path": "route",
                    "component": "views/admin/route/index",
                    "authority": null,
                    "redirect": null,
                    "keepAlive": "0",
                    "code": null,
                    "type": null,
                    "label": "动态路由",
                    "sort": null
                }
            ],
            "icon": "icon-xitongguanli",
            "name": "系统管理",
            "spread": false,
            "path": "/admin",
            "component": "Layout",
            "authority": null,
            "redirect": null,
            "keepAlive": "0",
            "code": null,
            "type": null,
            "label": "系统管理",
            "sort": null
        }
        ]
        // fetchMenuTree(this.listQuery).then(response => {
        //   this.treeData = response.data.data;
        // });
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      nodeExpand(data) {
        let aChildren = data.children;
        if (aChildren.length > 0) {
          this.oExpandedKey[data.id] = true;
          this.oTreeNodeChildren[data.id] = aChildren;
        }
        this.setExpandedKeys();
      },
      nodeCollapse(data) {
        this.oExpandedKey[data.id] = false;
        // 如果有子节点
        this.treeRecursion(this.oTreeNodeChildren[data.id], oNode => {
          this.oExpandedKey[oNode.id] = false;
        });
        this.setExpandedKeys();
      },
      setExpandedKeys() {
        let oTemp = this.oExpandedKey;
        this.aExpandedKeys = [];
        for (let sKey in oTemp) {
          if (oTemp[sKey]) {
            this.aExpandedKeys.push(parseInt(sKey));
          }
        }
      },
      treeRecursion(aChildren, fnCallback) {
        if (aChildren) {
          for (let i = 0; i < aChildren.length; ++i) {
            let oNode = aChildren[i];
            fnCallback && fnCallback(oNode);
            this.treeRecursion(oNode.children, fnCallback);
          }
        }
      },
      getNodeData(data) {
        if (!this.formEdit) {
          this.formStatus = "update";
        }
        getObj(data.id).then(response => {
          this.form = response.data.data;
        });
        this.currentId = data.id;
        this.showElement = true;
      },
      handlerEdit() {
        if (this.form.menuId) {
          this.formEdit = false;
          this.formStatus = "update";
        }
      },
      handlerAdd() {
        this.resetForm();
        this.formEdit = false;
        this.formStatus = "create";
      },
      handleDelete() {
        this.$confirm("此操作将永久删除, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          delObj(this.currentId).then(() => {
            this.getList();
            this.resetForm();
            this.onCancel();
            this.$notify({
              title: "成功",
              message: "删除成功",
              type: "success",
              duration: 2000
            });
          });
        });
      },
      update() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            putObj(this.form).then(() => {
              this.getList();
              this.$notify({
                title: "成功",
                message: "更新成功",
                type: "success",
                duration: 2000
              });
            });
          }
        });
      },
      create() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            addObj(this.form).then(() => {
              this.getList();
              this.$notify({
                title: "成功",
                message: "创建成功",
                type: "success",
                duration: 2000
              });
            });
          }
        });
      },
      onCancel() {
        this.formEdit = true;
        this.formStatus = "";
      },
      resetForm() {
        this.form = {
          permission: undefined,
          name: undefined,
          menuId: undefined,
          parentId: this.currentId,
          icon: undefined,
          sort: undefined,
          component: undefined,
          type: undefined,
          path: undefined
        };
      }
    }
  };
</script>
