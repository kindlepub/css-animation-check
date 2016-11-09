const keys = require('./keys')

module.exports = function (val, options) {
  if (typeof val === 'string') {
    return keys.animated.filter((check) => {
      return val.includes(check)
    })
  } else if (Array.isArray(val)) {
    var has = []
    val.forEach((v) => {
      if (typeof v === 'string') {
        var checked = keys.animated.filter((check) => {
          return val.includes(check)
        })
        if (checked.length) has = has.concat(checked)
      };
    })
    return has
  }
  return []
}

module.exports.options = function (options) {
  return keys.join(options)
}
