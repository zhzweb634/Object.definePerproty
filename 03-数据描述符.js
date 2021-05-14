let obj = {}
let temp = null
Object.defineProperty(obj, 'name', {
    get() {
        return 123
    },
    set(val) {
        temp = val
    }
})
/**
 ********** 只触发了get方法 ***********
 *  1. 获取.name属性的时候会触发get方法  之后会return出123
 *  2. 这个时候set并没有触发所以temp的值是null
 *  3. log出的结果 obj.name是 123 temp的值为 null
 */

obj.name = '黑手'
/**
 * ******* 增加上行代码  会触发 *********
 *  1. 修改了name属性的时候会触发 set 和 get方法
 *  2. 这个时候get  return 123 此时的obj.name = 123
 *  3. 触发set方法  tmep = val  此时的temp为  黑手
 *  此时的log是 obj.name是 123 temp的值为 黑手
 */
console.log('obj.name是',obj.name,'temp的值为',temp)
