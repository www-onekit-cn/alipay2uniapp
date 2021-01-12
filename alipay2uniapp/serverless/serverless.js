/*
 * @Autor: YeWei Wang
 * @Date: 2021-01-04 11:49:21
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-12 17:59:30
 * @Version: 1.0
 * @FilePath: \alipay2uniapp\alipay2uniapp\serverless\serverless.js
 */
import Db from './Db'
import File from './File'
export default class mpserverless {
  static get db () {
    return new Db(uniCloud.database())
  }

  static get file() {
    return new File
  }
}
