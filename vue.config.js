module.exports = { baseUrl: '/shop2/' },
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shop2/'
    : '/'
},
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "src/assets/variables.sass"`
        },
            scss: {
          additionalData: `@import "src/assets/variables.scss";`
        },
        less:{

          globalVars: {
            primary: '#fff'
          }
        }
      }
    }
  }

  module.exports = {
    publicPath: '/pink-shop/'
}


