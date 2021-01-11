/*
 * @Autor: YeWei Wang
 * @Date: 2021-01-07 11:22:11
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-11 16:14:34
 * @Version: 1.0
 * @FilePath: \alipay2uniapp\alipay2uniapp\serverless\Db.js
 */
import Collection from './Collection'
export default class Db {
  constructor(uni_database) {
    this.THIS = uni_database
  }

  collection(collectionName) {
    return new Collection(this.THIS.collection(collectionName),this)
  }

  // insert(data) {
  //   return this.THIS.add(data)
  // }
}