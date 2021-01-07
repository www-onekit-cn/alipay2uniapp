import Collection from './Collection'
export default class Db {
  constructor(uni_database) {
    this.THIS = uni_database
  }

  collection(tabel) {
    return new Collection(this.THIS.collection(tabel))
  }

  // insert(data) {
  //   return this.THIS.add(data)
  // }
}