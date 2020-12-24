export default class UpdateManager {
  constructor(uniappUpdateManager) {
    this.uniappUpdateManager = uniappUpdateManager
  }

  applyUpdate() {
    return this.uniappUpdateManager.applyUpdate()
  }

  onCheckForUpdate(callback) {
    return this.uniappUpdateManager.onCheckForUpdate(callback)
  }

  onUpdateFailed(callback) {
    return this.uniappUpdateManager.onUpdateFailed(callback)
  }

  onUpdateReady(callback) {
    return this.uniappUpdateManager.onUpdateReady(callback)
  }
}
