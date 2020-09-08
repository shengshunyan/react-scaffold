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