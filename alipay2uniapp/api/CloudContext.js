/* eslint-disable no-console */
import onekit from '../onekit'

export default class CloudContext {
  constructor(server) {
    this.guid = onekit.guid()
    this.socketTask = uni.connectSocket({
      url: `${server}cloudcontext/${this.guid}_`,
    })
    this.socketTask.onOpen(() => {
      console.log('WebSocket 已连接')
    })
    this.socketTask.onClose(() => {
      console.log('WebSocket 已断开')
    })

    this.socketTask.onError(error => {
      console.error('WebSocket 发生错误:', error)
    })

    this.socketTask.onMessage(message => {
      const data = JSON.parse(message.data)
      console.log(data)
      // if (Object.prototype.toString.call(message) === "[object ArrayBuffer]") {
      //   message = Codec.read(message);
      // }
    })
  }

  send(data, callback) {
    this.socketTask.send({
      data,
      success(res) {
        console.log(res)
        callback(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  }
}
