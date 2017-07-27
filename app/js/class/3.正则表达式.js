{
    //ES5 支持的写法
    let regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz33'));
    console.log(regex2.test('XYZ'));

    //ES6新增的
    let regex3 = new RegExp(/xyz/ig,'i');  //后面指定的修饰符，会覆盖前面正则使用的修饰符
    console.log(regex3.flags);
}

{
    // g修饰符 和 y修饰符 都是全局匹配 ，g修饰符在一次匹配之后，再继续匹配时没有要求必须紧接着去匹配
    let s='bbb_bb_b';
    let a1 =/b+/g;
    //let a2 =/b+/y;

    console.log('one', a1.exec(s), a2.exec(s));
    console.log('two', a1.exec(s), a2.exec(s));
}

{
    //u修饰符  unicode，
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
    //console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));
}