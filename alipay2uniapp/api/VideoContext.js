export default class VideoContext {
  constructor(uniVideoContext) {
    this.uniVideoContext = uniVideoContext
  }

  play() {
    return this.uniVideoContext.play()
  }

  pause() {
    return this.uniVideoContext.pause()
  }

  stop() {
    return this.uniVideoContext.stop()
  }

  seek(position) {
    return this.uniVideoContext.seek(position)
  }

  sendDanmu(data) {
    return this.uniVideoContext.playbackRate(data)
  }

  playbackRate(rate) {
    return this.uniVideoContext.playbackRate(rate)
  }

  requestFullScreen(direction) {
    return this.uniVideoContext.requestFullScreen(direction)
  }

  exitFullScreen() {
    return this.uniVideoContext.exitFullScreen()
  }

  showStatusBar() {
    return this.uniVideoContext.showStatusBar()
  }

  hideStatusBar() {
    return this.uniVideoContext.hideStatusBar()
  }
}
