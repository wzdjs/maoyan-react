const { override, addLessLoader,fixBabelImports } = require('customize-cra')

module.exports = override(
  // less的配置
  addLessLoader(),
  // 按需加载
  fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
)