/*
 * @Autor: YeWei Wang
 * @Date: 2021-01-12 17:55:07
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-01-13 11:02:49
 * @Version: 1.0
 * @FilePath: \alipay2uniapp\alipay2uniapp\serverless\file.js
 */

export default class File {
  constructor(){

  }

  uploadFile(options) {
    console.log(options)
    const filePath = options.filePath
    const cloudPath = options.cloudPath || './'
    return new Promise((my_resolve, my_reject) => {
      return uniCloud.uploadFile({
        filePath,
        cloudPath
      }).then(res => {
        const uni_res = {
          fileUrl: res.fileID,
          filePath: res.filePath
        }
        my_resolve(uni_res)
      }).catch(err => {
        const uni_err = err
        my_reject(uni_err)
      })
    })
  }

  deleteFile() {
    return uniCloud.uploadFile(options)
  }
}