let obj ={}

Object.defineProperty(obj, 'name', {
    value: '黑手'
})

// 等价于  ↓

Object.defineProperty(obj,'name', {
    value: '黑手',
    configurable: false,
    enumerable: false,
    writable: false
})

/**
 * obj.name 添加的属性名
 * 1. 不会出现在for in   等价 →   enumerable: false
 * 2. obj.name是不可修改的    等价 →  writable: false
 * 3. obj.name是不可删除的    等价 →  configurable: false
 */
console.log(obj.name)
