'use strict';

const Service = require('egg').Service;

class ColumnService extends Service {
  async findColumn(where) {
    const result = await this.ctx.model.Column.findOne(where);
    return result;
  }

  async findList(where = {}, pageSize, currentPage) {
    const result = {
      total: await this.ctx.model.Column.find(where).count(),
      list: await this.ctx.model.Column.find(where).skip((currentPage - 1) * pageSize).limit(pageSize),
      currentPage,
    };
    return result;
  }

  async addColumn(columnInfo) {
    const Info = new this.ctx.model.Column(columnInfo);
    return new Promise((resolve, reject) => {
      try {
        this.ctx.model.Column.create(Info, err => {
          if (err) {
            resolve({
              code: 1,
              message: '表名不能重复',
            });
          }
          resolve({
            code: 0,
            message: '添加成功',
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  // async updateColumn() {
  //   const result = await this.ctx.model.Column.updateOne({
  //     _id: '5c00f0ce862e9227acb56d22',
  //   }, {
  //     password: 'cccccccccc',
  //   });
  //   return result;
  // }

  // async deleteColumn() {
  //   const result = await this.ctx.model.Column.deleteOne({
  //     _id: '5c00f0ce862e9227acb56d22',
  //   });
  //   return result;
  // }
}

module.exports = ColumnService;
