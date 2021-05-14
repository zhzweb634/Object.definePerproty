let obj = {}

// 通过obj.key = value 给对象添加属性
obj.name = 'zs'

/**
 * 通过obj[key]给对象添加属性
 *  1. 定义变量
 *  2. obj[year变量] = 18
 */
year = 'age'
obj[year] = 18

// 打印obj
// { name: 'zs', age: 18 }
console.log(obj)
