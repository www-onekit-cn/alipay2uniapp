export default class MapContext {
  constructor(uniMapContext) {
    this.uniMapContext = uniMapContext
  }

  static addCustomLayer() {}

  static getCenterLocation(object) {
    return this.uniMapContext.getCenterLocation(object)
  }

  static getRegion(object) {
    return this.uniMapContext.getRegion(object)
  }

  static getRotate() {

  }

  static getScale(object) {
    return this.uniMapContext.getScale(object)
  }

  static getSkew() {

  }

  static includePoints(object) {
    return this.uniMapContext.includePoints(object)
  }

  static moveToLocation(object) {
    return this.uniMapContext.moveToLocation(object)
  }

  static removeCustomLayer() {

  }

  static setCenterOffset() {

  }

  static translateMarker(object) {
    return this.uniMapContext.translateMarker(object)
  }
}
