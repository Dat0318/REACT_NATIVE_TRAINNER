[Cau hoi khi phong van](markdown/pv.Md)

| [![React Native Logo](markdown/img/js_data_types.png)<br/>js basic data types](markdown/js_basic_data_types.Md)              | [![Javascript basic function](markdown/img/js_basic_function.jpg)<br/>js basic function](markdown/js_basic_function.Md) |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [![React Native Logo](markdown/img/rn_component.png)<br/>rn all component and install environment](markdown/rn_component.Md) | [![Javascript basic function](markdown/img/rn_packages.png)<br/>rn packages usually](markdown/rn_packages.Md)           |

# React native Tutorial

# source code structure

```javascript
├───android
│ ├───app
│ │ └───src
│ │ ├───debug
│ │ │ └───java
│ │ │ └───com
│ │ │ └───react\*native_trainner
│ │ └───main
│ │ ├───java
│ │ │ └───com
│ │ │ └───react_native_trainner
│ │ └───res
│ │ ├───mipmap-hdpi // start make lunch app icon
│ │ ├───mipmap-mdpi
│ │ ├───mipmap-xhdpi
│ │ ├───mipmap-xxhdpi
│ │ ├───mipmap-xxxhdpi // end make lunch app icon
│ │ └───values
│ └───gradle
│ └───wrapper
├───ios // config for ios platform
│ ├───REACT_NATIVE_TRAINNER
│ │ └───Images.xcassets
│ │ └───AppIcon.appiconset
│ ├───REACT_NATIVE_TRAINNER-tvOS
│ ├───REACT_NATIVE_TRAINNER-tvOSTests
│ ├───REACT_NATIVE_TRAINNER.xcodeproj
│ │ └───xcshareddata
│ │ └───xcschemes
│ └───REACT_NATIVE_TRAINNERTests
├───markdown
│ └───img
├───node_modules // library packages
│
├───src
│ ├───assets
│ │ ├───fonts // font text in the app
│ │ ├───images // source image
│ │ └───language // source language to change language in the app
│ ├───common
│ │ ├───Api // link all api to call
│ │ ├───Helper // some function to responsive app and detective status bar height
│ │ ├───Image // import source image and export to simple
│ │ ├───index
│ │ ├───Request // make form to send data to server by axios library
│ │ ├───Storage // save data to storage like local storage in web
│ │ ├───Style // style common, colors, font family
│ │ └───Validation // validate data input from client
│ ├───components // customer component
│ │ ├───Container
│ │ ├───Content
│ │ ├───Header
│ │ └───InputCustom
│ ├───config
│ ├───navigator // to navigate all screens in the app
│ │ └───TabBar
│ ├───screens // write all screen in here
│ │ └───Auth
│ │ ├───Pattern
│ │ └───Splash
│ ├───services // write call api like a object
│ └───stores // another things like, mobx, etc ...
└───**tests**
```

# react native training có 4 mục chính là:

---

#### [Các kiểu dữ liệu js hay dùng trong react native](markdown/js_basic_data_types.Md)

#### [Các hàm cơ bản của js hay dùng trong react native](markdown/js_basic_function.Md)

#### [Các props và component hay dùng và cài đặt môi trường](markdown/rn_component.Md)

#### [Các gói mà hay dùng](markdown/rn_packages.Md)

---

### [Cài dặt cho visual studio code và react native nhận các thư mục]()

```
+ @babel/plugin-proposal-decorators babel-plugin-module-resolver
```

packages dùng để config các đường đẫn của các foulder trong bộ source để phục vụ cho việc import trong các file code sau này thuận tiện hơn.

example [babel.config.js](babel.config.js):

```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@navigator': './src/navigator',
          '@screens': './src/screens',
          '@services': './src/services',
          '@common': './src/common',
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
```

khi đó ta có thể sử dụng trong code như sau:

```
// thay vì:
- import { Helper } from ‘../../../common/index’;
+ import { Helper } from ‘@common/index’;
```

thường babel-plugin-module-resolver được dùng với jsconfig.json để đồng thời khai báo vị trí các thư mục tương ứng để cho IDE Visual Studio Code hiểu. Ta có thể viết file [jsconfig.json](jsconfig.json) như sau:

```javascript
{
  "compilerOptions": {
  "experimentalDecorators": true,
  "baseUrl": "./",
  "paths": {
    "@common/_": ["src/common/_"],
    "@config/_": ["src/config/_"],
    "@assets/_": ["src/assets/_"],
    "@components/_": ["src/components/_"],
    "@screens/_": ["src/screens/_"],
    "@navigator/_": ["src/navigator/_"],
    "@stores/_": ["src/stores/_"],
    "@services/_": ["src/services/_"]
    }
  },
  "exclude": ["node_modules"]
}
```
# REACT_NATIVE_TRAINNER
