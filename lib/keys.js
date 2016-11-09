
const fs = require('fs')
const path = require('path')

class CSSAnimationKeys {
  constructor () {
    this.keys = this.__get()
  }
  get animated () { return this.keys.animated }
  get exempt () { return this.keys.exempt }
  get files () { return this.keys.files }
  __get () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'keys.json'), 'utf8'))
  }
  __set () {
    let json = JSON.stringify(this.keys)
    fs.writeFileSync(path.join(__dirname, 'keys.json'), json, 'utf8')
    return this
  }
  add (key, value) {
    var changed = false
    if (typeof key === 'string' && this.keys[key] && typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          if (addValue(val, this.keys[key])) {
            this.keys[key].push(value)
            changed = true
          }
        })
      } else if (addValue(value, this.keys[key])) {
        this.keys[key].push(value)
        changed = true
      }
    }
    if (changed) {
      return this.__set()
    }
    return this
  }
  join (data) {
    if (typeof data === 'object' && data !== null && data instanceof Object) {
      Object.assign(this.keys, data)
    }
    return this
  }
}

module.exports = new CSSAnimationKeys()

function addValue (val, v) {
  if (typeof val === 'string' && val.length && !v.includes(val)) {
    return true
  }
  return false
}
