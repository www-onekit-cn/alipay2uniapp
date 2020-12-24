export default class AudioContext {
  constructor(uniAudioContext) {
    this.uniAudioContext = uniAudioContext
  }

  pause() {
    this.uniAudioContext.pause()
  }

  play() {
    this.uniAudioContext.play()
  }

  seek(position) {
    this.uniAudioContext.seek(position)
  }

  setSrc(src) {
    this.uniAudioContext.setSrc(src)
  }
}
