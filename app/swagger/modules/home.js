'use strict';

module.exports = controller => {
  return [{
    type: 'get',
    url: '/',
    routerObj: controller.home.index,
    swaggerObj: {
      tags: [
        'home',
      ],
      summary: '后台页面',
      description: '',
      parameters: [
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
//   router.get('/', controller.home.index);
