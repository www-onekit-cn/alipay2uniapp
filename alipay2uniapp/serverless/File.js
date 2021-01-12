/*
 * @Autor: YeWei Wang
 * @Date: 2021-01-12 17:55:07
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-12 18:00:11
 * @Version: 1.0
 * @FilePath: \alipay2uniapp\alipay2uniapp\serverless\file.js
 */
export default class File {
  constructor(){

  }

  uploadFile(options) {
    return uniCloud.uploadFile(options)
  }

  deleteFile() {
    return uniCloud.uploadFile(options)
  }
}