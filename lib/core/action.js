const inquirer = require('inquirer');
const download = require('./download');

const rawListConfig = require('./../../template/index');

const getTemplateUrl = (type) => {
  // TODO: 根据type获取模板地址
  const templateUrlObj = {
    vue: 'https://github.com/vuejs/core.git#main',
    react: 'xxx'
  };
  // return templateUrlObj[type];
  // return 'https://gitee.com/vant-contrib/vant.git#main';
  return 'https://gitee.com/mirrors/umi.git';
};

const action = (project) => {
  inquirer.prompt(rawListConfig).then(answers => {

    const url = getTemplateUrl(answers.projectType);
    download(url, project);

  }).catch(error => {
    console.log(error);
  });
};

module.exports = action;