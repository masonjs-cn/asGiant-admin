'use strict';
// router.post('/column/getColumnList', controller.column.getColumnList); // 增加角色
// router.post('/column/addColumn', controller.column.addColumn); // 获取所有的用户
module.exports = controller => {
  return [
    {
      type: 'post',
      url: '/column/getColumnList',
      routerObj: controller.column.getColumnList,
      swaggerObj: {
        tags: [
          'column',
        ],
        summary: '获取栏目列表',
        description: '',
        parameters: [],
        responses: {
          200: {
            description: 'SUCCEED',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  description: 'status',
                },
                datas: {
                  type: 'array',
                  description: 'result datas',
                  properties: {
                    token: {
                      type: 'string',
                      description: 'token',
                    },
                  },
                },
                pageIndex: {
                  type: 'number',
                  description: 'pageIndex',
                },
                pageSize: {
                  type: 'number',
                  description: 'pageSize',
                },
                totalCount: {
                  type: 'number',
                  description: 'totalCount',
                },
              },
            },
          },
        },
      },
    },
    {
      type: 'post',
      url: '/column/addColumn',
      routerObj: controller.column.addColumn,
      swaggerObj: {
        tags: [
          'column',
        ],
        summary: '增加栏目列表',
        description: '',
        parameters: [],
        responses: {
          200: {
            description: 'SUCCEED',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  description: 'status',
                },
                datas: {
                  type: 'array',
                  description: 'result datas',
                  properties: {
                    token: {
                      type: 'string',
                      description: 'token',
                    },
                  },
                },
                pageIndex: {
                  type: 'number',
                  description: 'pageIndex',
                },
                pageSize: {
                  type: 'number',
                  description: 'pageSize',
                },
                totalCount: {
                  type: 'number',
                  description: 'totalCount',
                },
              },
            },
          },
        },
      },
    },
  ];
};
