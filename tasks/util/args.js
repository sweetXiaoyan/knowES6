import yargs from 'yargs';

//区分开发环境和线上环境
const  args = yargs
   .option('production',{
        boolean:true,
        default :false,
        describe:'采用boolean值，默认是false'
    })
   .option('watch',{
        boolean:true,
        default :false,
        describe:'是否需要监听文件的变化'
    })
   .option('verbose',{
        boolean:true,
        default :false,
        describe:'是否详细输出命令行执行的日志'
    })
   .option('sourcemaps',{
        describe:'内容映射,强制生成sourcemaps'
    })
   .option('port',{
        string:true,
        default :8080,
        describe:'设置端口'
    })
   .argv