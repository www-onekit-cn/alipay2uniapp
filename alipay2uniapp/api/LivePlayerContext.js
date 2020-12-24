export default class LivePlayerContext {
  constructor(uniLivePlayerContext) {
    this.uniLivePlayerContext = uniLivePlayerContext
  }

  play() {
    return this.uniLivePlayerContext.play()
  }

  pause() {
    return this.uniLivePlayerContext.pause()
  }

  stop() {
    return this.uniLivePlayerContext.stop()
  }

  mute() {
    return this.uniLivePlayerContext.mute()
  }

  resume(data) {
    return this.uniLivePlayerContext.resume(data)
  }

  requestFullScreen(direction) {
    return this.uniLivePlayerContext.requestFullScreen(direction)
  }

  exitFullScreen() {
    return this.uniLivePlayerContext.exitFullScreen()
  }
}
