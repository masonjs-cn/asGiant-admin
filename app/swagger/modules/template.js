// router.get('/template', controller.template.addHtml); // 创建html
'use strict';
module.exports = controller => {
  return [{
    type: 'get',
    url: '/template',
    routerObj: controller.template.addHtml,
    swaggerObj: {
      tags: [
        'template',
      ],
      summary: '创建html',
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
  }];
};
