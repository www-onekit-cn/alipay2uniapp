export default class BackgroundAudioManager {
  constructor(BackgroundAudioManager) {
    this.BackgroundAudioManager = BackgroundAudioManager
  }

  static set src(src) {
    this.BackgroundAudioManager.src(src)
  }

  static set currentTime(currentTime) {
    this.BackgroundAudioManager.currentTime(currentTime)
  }

  static set duration(duration) {
    this.BackgroundAudioManager.duration(duration)
  }

  static set autoplay(autoplay) {
    this.BackgroundAudioManager.autoplay(autoplay)
  }

  static set loop(loop) {
    this.BackgroundAudioManager.loop(loop)
  }

  // static set volume() {
  //   athis.BackgroundAudioManager.volume(volume)
  // }

  static set muted(muted) {
    this.BackgroundAudioManager.muted(muted)
  }

  static set notificationVisible(notificationVisible) {
    this.BackgroundAudioManager.notificationVisible(notificationVisible)
  }

  static set title(title) {
    this.BackgroundAudioManager.title(title)
  }

  static set artist(artist) {
    this.BackgroundAudioManager.artist(artist)
  }

  static set streamType(streamType) {
    this.BackgroundAudioManager.streamType(streamType)
  }

  // //////////////////////////////////////////
  static onCanplay() {}

  static onEnded() {}

  static onError() {}

  static onNext() {}

  static onPause() {}

  static onPlay() {}

  static onPrev() {}

  static onSeeked() {}

  static onSeeking() {}

  static onStop() {}

  static onTimeUpdate() {}

  static onWaiting() {}

  static pause() {}

  static play() {}

  static seek() {}

  static stop() {}
}
