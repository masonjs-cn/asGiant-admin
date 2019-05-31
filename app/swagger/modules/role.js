
'use strict';

module.exports = controller => {
  return [
    {
      type: 'post',
      url: '/role/addRole',
      routerObj: controller.role.addRole,
      swaggerObj: {
        tags: [
          'role',
        ],
        summary: '增加角色',
        description: '',
        parameters: [{
          in: 'query',
          name: 'name',
          description: 'role\'s name',
        },
        {
          in: 'query',
          name: 'pageIndex',
          description: 'pageIndex',
        },
        {
          in: 'query',
          name: 'pageSize',
          description: 'pageSize',
        },
        ],
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
      url: '/role/getRoleList',
      routerObj: controller.role.getRoleList,
      swaggerObj: {
        tags: [
          'role',
        ],
        summary: '获取所有角色',
        description: '',
        parameters: [{
          in: 'query',
          name: 'name',
          description: 'role\'s name',
        },
        {
          in: 'query',
          name: 'pageIndex',
          description: 'pageIndex',
        },
        {
          in: 'query',
          name: 'pageSize',
          description: 'pageSize',
        },
        ],
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


// router.post('/role/getRoleList', controller.role.getRoleList); // 获取所有角色
// router.post('/role/addRole', controller.role.addRole); // 增加角色
