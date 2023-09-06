module.exports = {
  printWidth: 80, // 一行最多80字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 不使用缩进符，而使用空格
  semi: false, // 行尾需要有分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  trailingComma: 'none', // 末尾不需要逗号
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  endOfLine: 'lf', // 换行符使用 lf
  vueIndentScriptAndStyle: true, // vue文件缩进
};
