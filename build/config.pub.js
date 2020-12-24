const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'alipay2uniapp': utils.resolve('alipay2uniapp/index.js')
        }
    },
}