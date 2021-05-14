'use strict'
let obj = {}
Object.defineProperty(obj, 'name', {
    value: '黑手',
    configurable: false,
    writable: true
})
/**
 * configurable:false不能重新定义属性
 * 下面重复定义会报错  在   24行打印的时候会报错   TypeError: Cannot redefine property: name
 *** 解决办法  使用writable: true
 *
 */
Object.defineProperty(obj, 'name', {
    value:'sb'
})
/**
 * configurable 可否删除
 * 1. 默认false 不可以删除
 *     当我们执行 delete 时会报错    **TypeError: Cannot delete property 'name' of #<Object>**
 * 2. 为 true时  可以删除
 *     这个时候log出的.name 就是 undefined
 */
console.log(obj.name)  // 这是输出第二次改变的值 sb
