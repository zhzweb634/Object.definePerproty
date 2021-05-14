let obj = {}

obj.name = '黑手'

// 等价于    ↓

Object.defineProperty(obj, 'name', {
    value: '黑手',
    configurable: true,
    enumerable: true,
    writable: true
})
/**
 * obj.name 添加的属性名
 * 1. 出现在for in   等价 →   enumerable: true
 * 2. obj.name是可修改的    等价 →  writable: true
 * 3. obj.name是可删除的    等价 →  configurable: true
 */
console.log(obj.name)
