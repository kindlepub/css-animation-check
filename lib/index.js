const read = require('./read')

module.exports = function (dirname, options) {
  let res = new Map()
  let dir = read(dirname, options)
  let items = dir.items
  items.forEach((item) => {
    if (item.has) res.set(item.name, item)
  })
  return res
}
module.exports.option = function (key, value) {
  return require('./keys').add(key, value)
}
