module.exports = {
  plugins: {
    tailwindcss: {},
    // // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    // "cnjm-postcss-px-to-viewport": {
    //   viewportWidth: 375, // 根据设计稿设定
    //   minPixelValue: 1, // 最小的转换数值
    //   unitPrecision: 2 // 转化精度，转换后保留位数
    // },
    /*"cnjm-postcss-px-to-viewport": {
      unitToConvert: 'mpx',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 812
    },*/
    "postcss-px-to-viewport": [
      {
        unitToConvert: "mpx",
        viewportWidth: 375,
        unitPrecision: 5,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 812
      },
      {
        unitToConvert: "dpx",
        viewportWidth: 1920,
        unitPrecision: 5,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 812
      }
    ],
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    }
  }
};
