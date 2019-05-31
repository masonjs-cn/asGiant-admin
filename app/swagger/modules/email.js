'use strict';
// router.get('/email/emailCode', controller.email.emailCode); // 发送邮箱验证码
// router.post('/email/addEmailConfig', controller.email.addEmailConfig); // 发送邮箱验证码
// router.post('/email/getEmailConfigs', controller.email.getEmailConfigs); // 发送邮箱验证码

module.exports = controller => {
  return [
    {
      type: 'get',
      url: '/email/emailCode',
      routerObj: controller.email.emailCode,
      swaggerObj: {
        tags: [
          'email',
        ],
        summary: '发送邮箱验证码',
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
      url: '/email/addEmailConfig',
      routerObj: controller.email.addEmailConfig,
      swaggerObj: {
        tags: [
          'email',
        ],
        summary: '发送邮箱验证码',
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
      url: '/email/getEmailConfigs',
      routerObj: controller.email.getEmailConfigs,
      swaggerObj: {
        tags: [
          'email',
        ],
        summary: '获取邮箱的配置',
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
