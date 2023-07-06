const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');


const downloadHandle = function (url, project) {
  const spinner = ora('Loading unicorns').start();
  spinner.text = 'downLoad loading ...';
  spinner.color = 'yellow';

  download('direct:' + url, project, {clone: true}, (err) => {
    if (!err) {
      spinner.succeed('download success');
      console.log(chalk.blue.bold('Done!'), chalk.red.bold('you run:'));
      console.log('cd ' + project);
      console.log('npm install ');
      console.log('npm run dev ');
    } else {
      spinner.fail('download fail');
    }
  });
};

module.exports = downloadHandle;