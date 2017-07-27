/**
 * Created by test on 2017/7/26.
 */
{
    //函数默认值，默认值后面不可以有没有默认值的参数
    function test(x,y='world'){
        console.log("默认值",x,y);
    }
    test("hello")
}
{
    // rest 参数   rest参数之后不能有其他参数
    function test3(...arg){
        for(let v of arg){
            console.log('rest', v);
        }
    }
    test3(1,2,3,4,6,'g0');
}
{
    // 扩展运算符
    console.log(...[1, 2, 3, 4]);   //和rest作用相反
}

{
    // 箭头函数
    let arrow = v => v * 2;
    console.log(arrow(3));

    //箭头函数写法： 箭头之前是参数，箭头后面是函数体
}

{
    //箭头函数的this指向是定义者，并不是调用者
}
{
    //尾调用 ，存在于函数式编程，函数的最后一句是不是函数
    // 作用是提升性能的
    function tail(x){
        console.log('tail', x);
    }
    function fx(x){
        return tail(x);
    }
    fx(123);

}