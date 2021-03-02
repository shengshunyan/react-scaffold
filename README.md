## react-scaffold

一个从零搭建的react todo项目

<br/>

## Run

### 安装依赖 

```Bash
npm install
```

### 运行 

```Bash
npm run start
```

### 打包

```Bash
npm run build
```

### 启动mock服务

```Bash
cd server
npm install
npm run server
```

<br/>

## VS code配置代码保存自动格式化

1. 安装插件 ESLint, stylelint

2. 添加编辑器配置项：Code -> Preferences -> Settings -> 搜索 editor.codeActionsOnSave 配置 -> 添加如下配置

    ```
     {
          "editor.codeActionsOnSave": {
               // For ESLint
               "source.fixAll.eslint": true,
               // For TSLint
               "source.fixAll.tslint": true,
                // For stylelint
               "source.fixAll.stylelint": true,
          }
     }
     ```

3. 禁用vscode其它自动格式化代码的插件，比如：Prettier, CSSComb, Beautify等

<br/>

## git commit message 规范

### 提交格式（注意冒号后面有空格）

```
<type>[optional scope]: <subject>
```

### 常用的type类别

- upd：更新某功能（不是 feat, 不是 fix）
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

### scope

可选填的代码影响范围

### subject

subject是 commit 目的的简短描述，可以做一些配置，如最大长度限制


### 例子

```
git commit -m 'feat(module-name): 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'
```