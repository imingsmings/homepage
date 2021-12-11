module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      propList: ['*', '!letter-spacing'],
      selectorBlackList: ['.ignore'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: [/node_modules/],
      landscape: false
    }),
    require('postcss-write-svg')({
      utf8: false
    }),
    require('postcss-flexbugs-fixes')
  ]
}
