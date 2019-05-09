const { override, addLessLoader,fixBabelImports,addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  // less的配置
  addLessLoader(),
  addWebpackAlias({
    '@': path.resolve(__dirname,'./src')
  }),
  // 按需加载
  fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
)