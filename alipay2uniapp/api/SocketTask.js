export default class SocketTask {
  constructor(uniSocketTask) {
    this.uniSocketTask = uniSocketTask
  }

  close(object) {
    return this.uniSocketTask.close(object)
  }

  send(object) {
    return this.uniSocketTask.send(object)
  }

  onOpen(callback) {
    return this.uniSocketTask.onOpen(callback)
  }

  onMessage(callback) {
    return this.uniSocketTask.onMessage(callback)
  }

  onClose(callback) {
    return this.uniSocketTask.onClose(callback)
  }

  onError(callback) {
    return this.uniSocketTask.onError(callback)
  }
}
