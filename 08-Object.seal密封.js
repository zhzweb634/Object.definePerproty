'use strict'
let obj = {}

Object.seal(obj)
/**
 * 密封之后不可以通过
 * .name添加属性                        抛出错误   Cannot add property name, object is not extensible
 * 也不可以通过defineProperty（） 配置    抛出错误  Cannot define property age, object is not extensible
 */
obj.name = 'zs' //  Cannot add property name, object is not extensible

Object.defineProperty(obj, 'age', {
    value: 18
})
console.log(obj.age) // Cannot define property age, object is not extensible

