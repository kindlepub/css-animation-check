

const read = require('./read')


module.exports = function(dirname){
    let res = new Map()
    let dir = read(dirname);
    let items = dir.items;
    items.forEach((item)=>{
        if(item.has) res.set(item.name,item)
    });
    return res;
};