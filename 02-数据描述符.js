let obj  = {}
/**
 *  value是 对象的值  key的形式在Object.defineProperty的第二个参数   'name'
 *  writable: 是否可以修改  默认false
 */
Object.defineProperty(obj, 'name', {
    value: '黑手',
    writable: false // 是否可以修改
})
obj.name = '神鹰'

/**
 * 当 writable 1. 为 true 时可以修改属性 这时候的log是神鹰   因为通过了obj.name修改了name属性
 *             2. 为 false 时不可以修改属性  这个时候log是黑手   即使外部修改了但是值也没有变
 */
console.log(obj.name)


/**
 *    属性名                     默认值
 *    value                   undefined
 *    get                     undefined
 *    set                     undefined
 *    writable                 false
 *    enumberable              false
 *    configurable             false
 */
