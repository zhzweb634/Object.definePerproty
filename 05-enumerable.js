let obj = {}

Object.defineProperty(obj,'name', {
    value: '黑手',
    enumerable: false
})

obj.age = 18

Object.defineProperty(obj, 'sex', {
    value:'男',
    enumerable: true
})

/**
 * enumberable: fasle  描述是 属性是否会出现在for in  或者是  Object.keys
 *   默认值   false  不会出现在遍历的对象上
 *           true   会出现在遍历节点上
 *   观察下方打印   [ 'age', 'sex' ]  验收以上效果
 *
 */
console.log(Object.keys(obj))
