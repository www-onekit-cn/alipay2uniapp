export default class Collection {
  constructor(uni_tabel) {
    this.THIS = uni_tabel
  }

  insertOne(data) {
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

  insertMany(data) {
    return new Promise((resolve, reject) => {
      this.THIS.add(data).then(res => {
        const result = {
          affectedDocs: res.result.inserted,
          result: res.result.ids,
          success: true
        }
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }

  deleteOne(filter) {
    return new Promise((resolve, reject) => {
      this.THIS.where(filter)
        .remove({
          getOne: true
        })
        .then(res => {
          const result = {
            affectedDocs: 0,
            result: {
              ok: res.result.deleted,
              n: 0
            },
            success: true
          }
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  deleteMany(filter) {
    return new Promise((resolve, reject) => {
      this.THIS.where(filter)
        .remove()
        .then(res => {
          const result = {
            affectedDocs: res.result.deleted,
            result: {
              ok: res.result.deleted,
              n: 0
            },
            success: true
          }

          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  find(query) {
    return new Promise((resolve, reject) => {
      this.THIS.where(query).get().then(res => {
        const result = {
          affectedDocs: res.result.data.length,
          result: res.result.data,
          success: true
        }
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }

  findOne(query) {
    return new Promise((resolve, reject) => {
      this.THIS.where(query).get({
        getOne: true
      }).then(res => {
        const result = {
          affectedDocs: res.result.data.length,
          result: res.result.data,
          success: true
        }
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }

  updateOne(filter, options) {
    return new Promise((resolve, reject) => {
      this.THIS.where(filter).get({
        getOne: true
      }).then(res => {
        this.THIS.where(res.result.data).update(options.$set)
          .then(resu => {
            const result = {
              affectedDocs: resu.result.affectedDocs,
              result: {
                ok: resu.result.updated,
                n: resu.result.updated,
                nModified: resu.result.updated,
                upserted: null
              },
              success: true
            }
            resolve(result)
          }).catch(err => {
            reject(err)
          })
      })

    })
  }

  updateMany(filter, options) {
    return new Promise((resolve, reject) => {
      this.THIS.where(filter).get().then(num => {
        const n = num.result.data.length
        this.THIS.where(filter)
          .update(options.$set)
          .then(res => {
            const result = {
              affectedDocs: res.result.affectedDocs,
              result: {
                ok: 1,
                nModified: res.result.updated,
                n,
                upserted: null
              },
              success: true
            }

            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })

    })
  }

  replaceOne(filter, doc) {
    return new Promise((resolve, reject) => {
      this.THIS.where(filter).get({
        getOne: true
      }).then(res => {
        this.THIS.where(res.result.data).update(doc).then(resu => {
          const result = {
            affectedDocs: resu.result.affectedDocs,
            result: {
              ok: resu.result.updated,
              n: resu.result.updated,
              nModified: resu.result.updated,
              upserted: null
            },
            success: true
          }
          resolve(result)
        }).catch(err => {
          reject(err)
        })
      })
    })
  }

  findOneAndUpdate(filter, update) {
    return new Promise((resolve, reject) => {
      this.THIS.where(filter).get({getOne: true}).then(num => {
        const n = num.result.data.length
        this.THIS.where(num.result.data)
          .update(update.$set)
          .then(res => {
            const result = {
              affectedDocs: res.result.affectedDocs,
              result: {
                ok: 1,
                nModified: res.result.updated,
                n,
                upserted: null
              },
              success: true
            }

            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })

    })
  }
}