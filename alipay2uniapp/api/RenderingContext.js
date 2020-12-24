/* eslint-disable max-len */
export default class RenderingContext {
  constructor(uniRenderingContext) {
    this.uniRenderingContext = uniRenderingContext
  }

  beginPath(a) {
    return this.uniRenderingContext.beginPath(a)
  }

  save() {
    return this.uniRenderingContext.save()
  }

  restore() {
    return this.uniRenderingContext.restore()
  }

  //
  setGlobalAlpha(alpha) {
    return this.uniRenderingContext.setGlobalAlpha(alpha)
  }

  setFillStyle(color) {
    return this.uniRenderingContext.setFillStyle(color)
  }

  setStrokeStyle(color) {
    return this.uniRenderingContext.setStrokeStyle(color)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.uniRenderingContext.setShadow(offsetX, offsetY, blur, color)
  }

  setLineCap(lineCap) {
    return this.uniRenderingContext.setLineCap(lineCap)
  }

  setLineJoin(lineJoin) {
    return this.uniRenderingContext.setLineJoin(lineJoin)
  }

  setLineWidth(lineWidth) {
    return this.uniRenderingContext.setLineWidth(lineWidth)
  }

  setMiterLimit(miterLimit) {
    return this.uniRenderingContext.setMiterLimit(miterLimit)
  }

  setFontSize(fontSize) {
    return this.uniRenderingContext.setFontSize(fontSize)
  }

  rotate(rotate) {
    return this.uniRenderingContext.rotate(rotate)
  }

  scale(scaleWidth, scaleHeight) {
    return this.uniRenderingContext.scale(scaleWidth, scaleHeight)
  }

  translate(x, y) {
    return this.uniRenderingContext.translate(x, y)
  }

  moveTo(x, y) {
    return this.uniRenderingContext.moveTo(x, y)
  }

  lineTo(x, y) {
    return this.uniRenderingContext.lineTo(x, y)
  }

  closePath() {
    return this.uniRenderingContext.closePath()
  }

  fillText(text, x, y, maxWidth) {
    return this.uniRenderingContext.fillText(text, x, y, maxWidth)
  }

  drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    return this.uniRenderingContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.uniRenderingContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.uniRenderingContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.uniRenderingContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  //
  rect(x, y, width, height) {
    return this.uniRenderingContext.rect(x, y, width, height)
  }

  //
  clearRect(x, y, width, height) {
    return this.uniRenderingContext.clearRect(x, y, width, height)
  }

  stroke() {
    return this.uniRenderingContext.stroke()
  }

  fill() {
    return this.uniRenderingContext.fill()
  }

  draw(reserve, callback) {
    return this.uniRenderingContext.draw(reserve, callback)
  }

  fillRect(x, y, width, height) {
    return this.uniRenderingContext.fillRect(x, y, width, height)
  }

  getActions() {
    return this.uniRenderingContext.getActions()
  }
}
