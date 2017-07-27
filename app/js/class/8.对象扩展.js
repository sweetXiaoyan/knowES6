/**
 * Created by test on 2017/7/26.
 */
{
    // 这里的对象是Object
    //  简洁表示法      属性表达式      扩展运算符     Object新增方法

}
{
    //  简洁表示法
    let obj =1;
    let b = 2;
    let es5 = {
        obj :obj,
        b:b
    }
    let es6 ={
        obj,
        b
    }
    console.log(es5);
    console.log(es6);

    //当存在方法的时候
    let es5_method = {
        hello:function(){
            console.log('hello');
        }
    }

    let es6_method ={
        hello(){
            console.log('world');
        }
    }
   es5_method.hello();es6_method.hello();
}

{
    // 属性表达式，，可以用在变量的依赖
    let a = 'b';
    let es5_obj = {
        a:'c',
        b:'c'
    };
    let es6_obj = {
        [a]:'c'
    }
    console.log(es5_obj,es6_obj);
}

{
    //新增API
    //字符串相等  Object.is()  功能相当于 ===
    console.log("字符串相等？"+Object.is('abf', 'abf'), 'abf' === 'abf');
    console.log("数组相等？" + Object.is([1], [1]), [1] === [1]);

    // 浅拷贝 Object.assign   拷贝的是对象自身身上的属性，原型对象上的不拷贝
    console.log("对象拷贝",Object.assign({a: 'a'}, {b: "b"}));
}