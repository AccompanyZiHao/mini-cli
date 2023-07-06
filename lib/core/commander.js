const action = require('./action');
const pkg = require('../../package.json');


const myCommander = (program) => {
  // 名称，描述，版本号，用法提示。
  program
    .name('mini-cli')
    .description('这是一个脚手架，用来生成vue/react框架')
    .version(`mini-cli ${pkg.version}`)
    .usage('<command> [options]');

  program
    .command('create <project-name> ')
    .description('创建项目') // 命令描述
    .option('-f,--force', '是否强制覆盖已有项目') // 传入action的第二个参数
    .action(action);
};

module.exports = myCommander;
