/**
 * Created by test on 2017/7/24.
 */
/* 用于变量交换*/
{
    let a = 1;
    let b = 2;
    [a,b] = [b, a];
    console.log(a, b);
}
/*对象解构赋值的使用场景*/
{
    let obj = {
        p:'676',
        q:'ss'
    }
    let {p,q} = obj;
    console.log(p,q);  // 676,ss
}
{
    let {a=10,b=5} ={a:3};
    console.log(a,b);
}
{
    let jsonData ={
        title:'zhe shi title',
        content:[{
                title:'test',
                des:'description'
        }]
    }
    let {title:mainTitle,content:[{title:cnTitle}]} =jsonData;
    console.log(mainTitle,cnTitle);  // zhe shi title   test
 }