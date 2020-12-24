import Vue from 'vue'

export default class OneKit{

current() {
  return Vue.prototype.CURRENT;
}

currentUrl() {
  return this.current().$route.path;
}

}