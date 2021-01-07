import Db from './Db'
export default class serverless {
  static get db () {
    return new Db(uniCloud.database())
  }
}
