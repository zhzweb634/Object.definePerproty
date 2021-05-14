
let obj = {
    age: 18
}

Object.preventExtensions(obj)

obj.name = 'zs'
/**
 *  不可扩展 Object.preventExtensions（对象名）
 *      特性： 保留自己 已有属性  不可添加新的属性
 *      开启严格模式会报错   Cannot add property name, object is not extensible
 *      不开启就是undefined
 */

Object.defineProperty(obj, 'age', {
    value: 100,
    writable: true
})
/**
 * 上述代码说明可以进行配置
 */
console.log(obj.age)
console.log(obj.name)
