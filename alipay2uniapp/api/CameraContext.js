export default class VideoContext {
  constructor(uniCameraContext) {
    this.uniCameraContext = uniCameraContext
  }

  takePhoto() {
    return this.uniCameraContext.takePhoto()
  }

  setZoom() {
    return this.uniCameraContext.setZoom()
  }

  startRecord() {
    return this.uniCameraContext.startRecord()
  }

  stopRecord(position) {
    return this.uniCameraContext.stopRecord(position)
  }
}
