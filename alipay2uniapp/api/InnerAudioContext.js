export default class InnerAudioContext {
  constructor(uniInnerAudioContext) {
    this.uniInnerAudioContext = uniInnerAudioContext
  }

  play() {
    return this.uniInnerAudioContext.play()
  }

  pause() {
    return this.uniInnerAudioContext.pause()
  }

  stop() {
    return this.uniInnerAudioContext.stop()
  }

  seek(position) {
    return this.uniInnerAudioContext.seek(position)
  }

  onCanplay(callback) {
    return this.uniInnerAudioContext.onCanplay(callback)
  }

  offCanplay(callback) {
    return this.uniInnerAudioContext.offCanplay(callback)
  }

  onPlay(callback) {
    return this.uniInnerAudioContext.onPlay(callback)
  }

  offPlay(callback) {
    return this.uniInnerAudioContext.offPlay(callback)
  }

  onPause(callback) {
    return this.uniInnerAudioContext.onPause(callback)
  }

  offPause(callback) {
    return this.uniInnerAudioContext.offPause(callback)
  }

  onStop(callback) {
    return this.uniInnerAudioContext.onStop(callback)
  }

  offStop(callback) {
    return this.uniInnerAudioContext.offStop(callback)
  }

  onEnded(callback) {
    return this.uniInnerAudioContext.onEnded(callback)
  }

  offEnded(callback) {
    return this.uniInnerAudioContext.offEnded(callback)
  }

  onTimeUpdate(callback) {
    return this.uniInnerAudioContext.onTimeUpdate(callback)
  }

  offTimeUpdate(callback) {
    return this.uniInnerAudioContext.offTimeUpdate(callback)
  }

  onError(callback) {
    return this.uniInnerAudioContext.onError(callback)
  }

  offError(callback) {
    return this.uniInnerAudioContext.offError(callback)
  }

  onWaiting(callback) {
    return this.uniInnerAudioContext.onWaiting(callback)
  }

  offWaiting(callback) {
    return this.uniInnerAudioContext.offWaiting(callback)
  }

  onSeeking(callback) {
    return this.uniInnerAudioContext.onSeeking(callback)
  }

  offSeeking(callback) {
    return this.uniInnerAudioContext.offSeeking(callback)
  }

  onSeeked(callback) {
    return this.uniInnerAudioContext.onSeeked(callback)
  }

  offSeeked(callback) {
    return this.uniInnerAudioContext.offSeeked(callback)
  }
}
