module.exports = {
    /*
   ** Headers of the page
   */
    head: {
        title: 'blog-nuxt',
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            hid: 'description',
            name: 'description',
            content: 'Nuxt.js project'
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
   ** Customize the progress bar color
   */
    loading: {
        color: '#3B8070'
    },
    /*
   ** Build configuration
   */
    build: {
    /*
     ** Run ESLint on save
     */
        // extend(config, {
        //     isDev,
        //     isClient
        // }) {
        //     if (isDev && isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/
        //         })
        //     }
        // },
        vendor: ['element-ui', 'axios']
    },

    plugins: [{
        src: '~plugins/ElementUI',
        ssr: true
    }],

    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        proxy: true
    },
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:7001',
            pathRewrite: { '^/api': '' }
        }
    },

    // css config
    css: ['~assets/css/normailze.css']
}
