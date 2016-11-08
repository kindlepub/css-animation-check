


const dirTree = require('directory-tree')
const keys = require('./keys')
const proxy = require('./proxy')



class FileDir{
    constructor(directory){
        this.directory = directory;
        let tree = dirTree(directory,keys.fileTypes);
        this._items =  tree.children.filter((item)=>{
            return !keys.exemptFolders.includes(item.name);    
        });
    }
}


module.exports = function(dir){
    return proxy(new FileDir(dir));
}