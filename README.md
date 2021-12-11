# Vue 3 + Typescript + Vite + Electron

node ^v14.7.0  
electron ^16.0.4  
typescript ^4.4.4  
vite ^2.7.0  


# init
https://dev.to/brojenuel/vite-vue-3-electron-5h4o



# For python

参考：

https://github.com/pazrul/electron-zerorpc-example


设置版本后再安装 zerorpc
```
export PYTHON=python3
yarn add zerorpc
```
安装失败： Error: connect ETIMEDOUT 20.205.243.166:443
```
npm i -g node-gyp@latest && npm config set node_gyp "/usr/local/lib/node_modules/node-gyp/bin/node-gyp.js"
yarn add zerorpc --network-concurrency 1
```

```
brew install zmp
pip3 install zerorpc
```

zerorpc 安装失败


zeromq 验证失败， 应该是可行的就是版本不匹配