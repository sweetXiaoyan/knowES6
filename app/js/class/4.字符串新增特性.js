/**
 * Created by test on 2017/7/24.
 */
{
    console.log('a','\u0061');
    console.log('s','\u20BB7');
    console.log('s','\u{20BB7}');
    console.log('s','\u{20BB}');
    console.log(1);
    let s ='我?';
    console.log('length',s.length);
}

{
    let str = 'abc';
    console.log(str.repeat(2));
}
{
    let str = 'string';
    console.log('include', str.includes('r'));
    console.log('start', str.startsWith('str'));
    console.log('end', str.endsWith('g'));
}
{
    //标签模板
    let q='aa';
}
{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}