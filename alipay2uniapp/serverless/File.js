export default class File {

  uploadFile(options) {
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

  deleteFile(fileURL) {
    let fileList = []
    fileList.push(fileURL)
    return new Promise((my_resolve, my_reject) => {
      return uniCloud.deleteFile(fileList)
        .then(() => {
          const uni_res = {
            success: true,
            result: {}
          }
          my_resolve(uni_res)
        })
        .catch(err => {
          const uni_err = err
          my_reject(uni_err)
        })
    })
  }
}