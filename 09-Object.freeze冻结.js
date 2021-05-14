'use strict'
let obj = {
    name: '黑手'
}

Object.freeze(obj)

// obj.age = 18
obj.name = 'zs'  //  Cannot assign to read only property 'name' of object '#<Object>'
console.log(obj.age) //  Cannot add property age, object is not extensible
