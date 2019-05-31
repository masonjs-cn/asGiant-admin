'use strict';
// router.post('/upload', controller.upload.index); // 上传接口
module.exports = controller => {
  return [
    {
      type: 'post',
      url: '/upload',
      routerObj: controller.upload.index,
      swaggerObj: {
        tags: [
          'upload',
        ],
        summary: '上传接口',
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
