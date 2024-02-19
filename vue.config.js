const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap:false
})
module.exports ={
  productionSourceMap:false,
  devServer:{
  port:5000
  }};
  