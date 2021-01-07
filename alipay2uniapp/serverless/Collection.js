
export default class Collection {
  constructor(uni_tabel) {
    this.THIS = uni_tabel
  }

  insertOne(data) {
    // return this.THIS.add(data)
    return new Promise((resolve, reject) => {
      this.THIS.add(data).then(res => {
        const result = {
          affectedDocs: 1,
          result: {
            insertedId: res.result.id,
            ok: 1,
            n: 1,
          },
          success: true
        }
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
}