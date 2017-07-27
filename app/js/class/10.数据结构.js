/**
 * Created by test on 2017/7/27.
 */
{
    /*  Set  本身是一个构造函数，用来生成Set数据结构
    ES6 提供了新的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值*/

    var s = new Set();
    [2,5,1,4,2,3,6,9].map(x =>s.add(x));

    for(let i of s){
        console.log(i);
    }
}