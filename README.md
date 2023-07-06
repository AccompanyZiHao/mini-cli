# mini-cli
mini-cli

```shell
安装依赖
npm i

通过软链，映射到全局
npm link

mini-cli create <project-name>
```

## 1.创建文件&初始化

```sh
mkdir mini-ci
npm init
mkdir bin && cd bin && touch main.js
```

## 2.main.js

```js
#! /usr/bin/env node
console.log('my-cli start')
```

`#！`这个符号通常在第一行开头中出现，用于指明这个脚本文件的解释程序。

`/usr/bin/env` 就是告诉系统可以在 `PATH` 目录中查找。

`#! /usr/bin/env node` 因此这一行就是为了解决不同的用户`node`路径不同的问题，它可以让系统自动去查找`node`来执行你的脚本文件。

注意这里的`packageName`一定要对应你的`npm`包 `package.json` 里的 `name` 字段值。

执行 `npm link` 映射到全局，不理解的可以参考此链接 [http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

运行 `mini-cli` 控制台出现 `my-cli start` 说明第一步成功了。

![img.png](https://cdn.jsdelivr.net/gh/AccompanyZiHao/images/cli/mini_cli_img_0.png)

## 3. 安装插件

安装 `commander` 自定义命令行指令

![img_1.png](https://cdn.jsdelivr.net/gh/AccompanyZiHao/images/cli/mini_cli_img_1.png)

![img_2.png](https://cdn.jsdelivr.net/gh/AccompanyZiHao/images/cli/mini_cli_img_2.png)

安装`inquirer` 交互式命令行界面

这里使用的是 `"inquirer": "^8.2.5",` 高版本的使用的`ESModule` 不能使用 `require`

![img_3.png](https://cdn.jsdelivr.net/gh/AccompanyZiHao/images/cli/mini_cli_img_3.png)

安装 `chalk` 一个终端字符串美化工具。

安装 `ora` 命令行 `loading` 动效

![img_4.png](https://cdn.jsdelivr.net/gh/AccompanyZiHao/images/cli/mini_cli_img_4.png)

`download-git-repo` 下载模版

![img_5.png](https://cdn.jsdelivr.net/gh/AccompanyZiHao/images/cli/mini_cli_img_5.png)





