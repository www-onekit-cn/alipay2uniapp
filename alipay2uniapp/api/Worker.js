export default class Worker {
  constructor(js) {
    this._WorkerContext = new Worker(js)
  }

  postMessage(message) {
    this._WorkerContext.postMessage(message)
  }

  onMessage(callback) {
    this._WorkerContext.onmessage(callback)
  }

  terminate() {
    this._WorkerContext.terminate()
  }
}
