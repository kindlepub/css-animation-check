

const fs = require('fs')
const has = require('./has')
const ITEMS = Symbol('ITEMS')
class Item{
    constructor(item){
        Object.assign(this,item);
    }
    get text(){
        if(!this._text){
            this._text = fs.readFileSync(this.path,'utf8'); 
        }
        return this._text;
    }
    get has(){
        if(!this.matches){
            this.matches = has(this.text)
        }
        return this.matches.length > 0
    }
}

function addChildren(item,children){
    item.children.map((child)=>{
        var subs = getChildren(child,children)
        if(subs){}
        else{
            children.push(new Item(child));
        } 
    })
    return children;
}
function getChildren(item,children){
    if(item.children) {
        return addChildren(item,children)
    }
    return;

}

function getItems(items){

    let a = []
    items.forEach((item)=>{
        let children = getChildren(item,a);
        if(children){
            
        }else{
            a.push(new Item(item));
        }
    })
    return a;

}

function createProxy(fd){
    
    return new Proxy(fd,{
        get: function(obj, prop) {
            if(!obj[ITEMS]){
                obj[ITEMS] = getItems(obj._items);
            }
            if(prop === 'items'){
                return obj[ITEMS]
            }
            if(prop === 'count'){
                return obj[ITEMS].length;
            }
            if(prop in obj) return obj[prop]
            return undefined;
        }
	});
}
	
module.exports = function(fileDir){
    return createProxy(fileDir);
};