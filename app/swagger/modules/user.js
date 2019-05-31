'use strict';
// router.post('/user/getUserList', controller.user.getUserList); // 获取所有的用户
// router.get('/user/code', controller.user.code); // 获取图片
// router.get('/user/signup', controller.user.signup);// 注册
// router.post('/user/signinUser', controller.user.signinUser); // 登录
module.exports = controller => {
  return [
    {
      type: 'post',
      url: '/user/signinUser',
      routerObj: controller.user.signinUser,
      swaggerObj: {
        tags: [
          'user',
        ],
        summary: '登录',
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
      type: 'get',
      url: '/user/code',
      routerObj: controller.user.code,
      swaggerObj: {
        tags: [
          'user',
        ],
        summary: '获取图片',
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
      url: '/user/getUserList',
      routerObj: controller.user.getUserList,
      swaggerObj: {
        tags: [
          'user',
        ],
        summary: '用户列表',
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

