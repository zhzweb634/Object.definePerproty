// 必须开启严格模式
"use strict"
let obj = {}

Object.defineProperty(obj, "name", {
    value: '黑手',
    configurable: false, // 不可删除
    writable: false // 不可修改
})
/**
 * 通过以两个描述符 我们就创建出来一个 包含了一下 **所有特征**  的对象
 *  1. 不可删除        当你删除的时候 会抛出错误  Cannot delete property 'name' of #<Object>
 *  2. 不可修改的对象   当你修改时候   会抛出错误  Cannot assign to read only property 'name' of object '#<Object>'
 *  3. 不可重新定义     当你重新定义   会抛出错误  Cannot redefine property: name
 */
Object.defineProperty(obj, 'name', {
    value: '新黑手' // Cannot redefine prop erty: name
})
delete obj.name // Cannot delete property 'name' of #<Object>
obj.name = '123' // Cannot assign to read only property 'name' of object '#<Object>'
console.log(obj.name)
