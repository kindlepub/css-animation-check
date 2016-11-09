const dirTree = require('directory-tree')
const keys = require('./keys')
const proxy = require('./proxy')

class FileDir {
  constructor (directory) {
    this.directory = directory
    let tree = dirTree(directory, keys.files)
    this._items = tree.children.filter((item) => {
      return !keys.exempt.includes(item.name)
    })
  }
}

module.exports = function (dir, options) {
  if (options) keys.join(options)
  return proxy(new FileDir(dir))
}
