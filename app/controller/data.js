"use strict";

const { Controller } = require("egg");

class DataController extends Controller {
  async save() {
    const { ctx } = this;
    // 使用 egg-multipart 中间件解析 FormData 数据
    const parts = ctx.multipart();
    let part;

    while ((part = await parts()) != null) {
      if (part.length) {
        // 处理字段数据
        console.log("field", part);
      } else {
        // 处理文件数据
        console.log("file", part);
      }
    }

    ctx.body = {
      success: true,
      message: part,
    };
  }
}

module.exports = DataController;
