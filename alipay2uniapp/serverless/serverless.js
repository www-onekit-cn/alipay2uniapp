/*
 * @Autor: YeWei Wang
 * @Date: 2021-01-04 11:49:21
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-11 13:58:05
 * @Version: 1.0
 * @FilePath: \alipay2uniapp\alipay2uniapp\serverless\serverless.js
 */
import Db from './Db'
export default class mpserverless {
  static get db () {
    return new Db(uniCloud.database())
  }
}
