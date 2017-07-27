/**
 * Created by test on 2017/7/26.
 */
{
    /* 提供一个独一无二的值
    Symbol声明的变量，不相等，不重复
     */
}
{
    //声明变量 方式一 ：
   let a1 = Symbol();
   let a2 = Symbol();
    console.log(a1 === a2);
    //Symbol声明的变量是独一无二的，

    let a3 = Symbol.for('a3');   //这种方式可以采用 a3字符串找到声明的a3
    let a4 = Symbol.for('a3');   //当已经注册过全局变量 a3 ,就直接找到它，赋值，否则重新创建一个key为a3的变量
    console.log(a3 === a4);

}

{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]:'111',
        'abc':'hello',
        'k':'world'
    }
    console.log('obj', obj);
    // 对象中如果使用到Symbol做key值得时候，使用for....in 和let..of 取不到它
   for(let  [key,value] of Object.entries(obj)){
       console.log('let of', key, value);
   }
    //只能找到Symbol声明的
    Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
})
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('Reflect', item, obj[item]);
    })


}