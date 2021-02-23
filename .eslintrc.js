module.exports = {
    // 禁用持续查找,一旦发现了配置文件就停止对父文件夹的查找
    root: true,
    extends: ['plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
        sourceType: 'module',
        // 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。
        // 你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
        ecmaVersion: 11,
        // 额外的语言特性
        ecmaFeatures: {
            // 启用 JSX
            jsx: true,
            // 启用实验性的 object rest/spread properties 支持
            experimentalObjectRestSpread: true,
        },
    },
    // 一个环境定义了一组预定义的全局变量
    env: {
        browser: true, // 浏览器环境中的全局变量
        node: true, // Node.js 全局变量和 Node.js 作用域
        es2020: true, // 启用除了 modules 以外的所有 ECMAScript 2020 特性
    },
    plugins: [
        '@typescript-eslint',
        'react-hooks',
    ],
    // 脚本在执行期间访问的额外的全局变量: true表示变量可以被覆盖，false表示不允许被覆盖
    globals: {
    // globalVariable: true,
    },
    /**
     * 个性化规则配置
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    rules: {
        // 句尾分号
        semi: ['error', 'always'],
        // 代码中console/debugger处理
        'no-console': 'warn',
        'no-debugger': 'warn',
        // 代码使用4个空格的缩进风格
        indent: ['error', 4, { SwitchCase: 1 }],
        // 关闭命名function表达式规则
        'func-names': 'off',
        // 可以行尾空白
        'no-trailing-spaces': 'off',
        // 对象、数组换行时需要加拖尾逗号
        'comma-dangle': ['error', 'always-multiline'],
        // 关闭换行符转换
        'linebreak-style': 'off',
        // 禁止使用指定语法
        'no-restricted-syntax': ['error', 'WithStatement'],
        // 可以使用++/--
        'no-plusplus': 'off',
        // 使用单引号
        quotes: [
            'error', 'single',
        ],
        // 强制最大可嵌深度为3
        'max-depth': [
            'error', 3,
        ],
        // 强制函数块中的语句最大50行
        'max-statements': [
            'error', 50,
        ],
        // 强制行的最大长度150,注释200
        'max-len': [
            'error', {
                code: 150,
                comments: 200,
            },
        ],
        // 关闭require()强制在模块顶部调用（NodeJs rules， 9.0之后全部使用import）
        'global-require': 'off',

        // ES6 rules
        // 箭头函数的箭头前后都要有空格
        'arrow-spacing': 'error',
        // 接收const被修改的通知
        'no-const-assign': 'error',
        // 要求使用let或const而不是var
        'no-var': 'error',
        // 如果一个变量不会被重新赋值，则使用const声明
        'prefer-const': 'error',
        // 关闭强制在花括号内使用一致的换行符
        'object-curly-newline': 'off',
        'new-cap': ['error', { properties: false, capIsNew: false }],
        'no-useless-escape': 'off',
        // 数组索引可以用作key
        'react/no-array-index-key': 'off',
        // 组件属性可以传any,array,object
        'react/forbid-prop-types': 'off',
        // 组件内部换行
        'react/jsx-one-expression-per-line': 'off',
        // 链接地址中可以使用 javascript:
        'no-script-url': 'off',
        // 关闭点击元素上强制增加onKey**事件
        'click-events-have-key-events': 'off',
        // 关闭引用依赖检查
        'import/no-extraneous-dependencies': 'off',
        // 关闭路径处理依赖
        'import/no-cycle': 'off',
        // 可以使用html，有一些场景，后端会发一些html到前端需要渲染
        'react/no-danger': 'off',
        // 当它们只有一个参数时，箭头函数省略括号
        'arrow-parens': ['error', 'as-needed'],
        'jsx-a11y/control-has-associated-label': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
