/**
 * Created by test on 2017/7/24.
 */
{
    //二进制数值是以 0b开头   8进制 0o
    console.log(0b11101111);
    console.log(0o767);
}
{
    //判断是不是有穷的
    console.log(Number.isFinite(15),'--15');  //true
    console.log(Number.isFinite(NaN),'--NaN'); //false
    console.log(Number.isFinite('true'/0),'--1/0');  //false
}
{
    console.log(Number.isInteger(25),'---25是不是整数');  //true
    console.log(Number.isInteger(25.0),'---25.0是不是整数');//true
    console.log(Number.isInteger(25.3),'---25.3是不是整数');//true
    console.log(Number.isInteger('25.2'),'---25.2是不是整数');//true
}