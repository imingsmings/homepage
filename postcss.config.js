module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-write-svg')({
      utf8: false
    }),
    require('postcss-flexbugs-fixes')
  ]
}
