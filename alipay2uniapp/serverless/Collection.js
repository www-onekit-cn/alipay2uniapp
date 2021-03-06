export default class Collection {
  constructor(uni_conllecttion, uni_db) {
    this.DB = uni_db
    this.THIS = uni_conllecttion
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

  updateOne() {
    return new Promise((resolve, reject) => {
      this.THIS.where(arguments[0]).get({
        getOne: true
      }).then(res => {
        this.THIS.where(res.result.data).update(arguments[1].$set)
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

  updateMany() {
    return new Promise((resolve, reject) => {
      this.THIS.where(arguments[0]).get().then(num => {
        const n = num.result.data.length
        this.THIS.where(arguments[0])
          .update(arguments[1].$set)
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

  replaceOne() {
    return new Promise((resolve, reject) => {
      this.THIS.where(arguments[0]).get({
        getOne: true
      }).then(res => {
        this.THIS.where(res.result.data).update(arguments[1]).then(resu => {
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

  findOneAndUpdate() {
    return new Promise((resolve, reject) => {
      this.THIS.where(argumentsp0).get({
        getOne: true
      }).then(num => {
        const n = num.result.data.length
        this.THIS.where(num.result.data)
          .update(arguments[1].$set)
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

  findOneAndReplace() {
    return new Promise((resolve, reject) => {
      this.THIS.where(arguments[0]).get({
        getOne: true
      }).then(res => {
        this.THIS.where(res.result.data).update(arguments[1]).then(() => {
          this.THIS.where(arguments[1]).get().then(resu => {
            const result = {
              affectedDocs: resu.result.affectedDocs,
              result: {
                ok: 1,
                value: resu.result.data[0]
              },
              success: true
            }
            resolve(result)
          }).catch(err => {
            reject(err)
          })
        })
      })
    })
  }

  findOneAndDelete() {
    return new Promise((resolve, reject) => {
      this.THIS.where(arguments[0]).get({
        getOne: true
      }).then(res => {
        this.THIS.where(res.result.data).remove()
        const result = {
          affectedDocs: 1,
          result: {
            ok: 1,
            value: res.result.data
          },
          success: true
        }
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }

  aggregate(my_pipeline) {
    const _ = this.DB.THIS.command
    let uni_aggregate = this.THIS.aggregate()

    function Aggregate(my_value, uni_aggregate, my_key) {
      uni_aggregate = uni_aggregate[my_key.substr(1)](my_value)
      return uni_aggregate
    }

    let my_item_value, my_item_key
    for (const my_item of my_pipeline) {
      for (my_item_key of Object.keys(my_item)) {
        my_item_value = my_item[my_item_key]
      }
    }

    uni_aggregate = Aggregate(my_item_value, uni_aggregate, my_item_key)

    return new Promise((my_resolve, my_reject) => {
      uni_aggregate.end().then(uni_res => {
        const my_res = {
          affectedDocs: uni_res.result.affectedDocs,
          result: uni_res.result.data,
          success: true
        }
        my_resolve(my_res)
      }).catch(uni_error => {
        const my_error = {
          errMsg: uni_error
        }
        my_reject(my_error)
      })
    })
  }

  count(my_query) {

    const $ = this.DB.THIS.command

    let my_where_key, my_where_val, my_where_val_val, va_val_left, va_val_right

    my_where_key = Object.keys(my_query)[0]
    my_where_val = Object.values(my_query)
    my_where_val_val = Object.values(my_where_val)[0]

    va_val_left = Object.keys(my_where_val_val)[0]
    va_val_right = Object.values(my_where_val_val)[0]

    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.where({
        [my_where_key]: $[va_val_left.substr(1)](va_val_right)
      }).count().then(uni_res => {
        const my_res = {
          affectedDocs: uni_res.result.affectedDocs,
          result: uni_res.result.total,
          success: true
        }
        wx_resolve(my_res)
      }).catch(err => {
        const errMsg = err
        wx_reject(errMsg)
      })
    })
  }
}