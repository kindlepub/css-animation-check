

const checks = require('./keys').animated

module.exports = function(val){
    if(typeof val === 'string'){
        return checks.filter((check)=>{
            return val.includes(check);
        });
    }else if(Array.isArray(val)){
        var has = [];
        val.forEach((v)=>{
            if(typeof v === 'string'){
                var checked = checks.filter((check)=>{
                    return val.includes(check);
                })
                if(checked.length) has = has.concat(checked);
            };
        });
        return has;
    }
    return [];
};