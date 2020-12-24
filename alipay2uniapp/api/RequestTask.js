export default class RequestTask {
  constructor(uniappRequestTask) {
    this.uniappRequestTask = uniappRequestTask
  }

  abort() {
    return this.uniappRequestTask.abort()
  }

  offHeadersReceived(callback) {
    return this.uniappRequestTask.offHeadersReceived(callback)
  }

  onHeadersReceived(callback) {
    return this.uniappRequestTask.onHeadersReceived(callback)
  }
}
