export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'barjlazuardi',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        css: [
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            {
                src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/styles/css/main.css',
        '~assets/styles/scss/_main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/app.js',
        '@/plugins/filter.js',
        '@/plugins/scroll.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxt/postcss8'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {}
            }
        },
        // https://nuxtjs.org/docs/features/configuration/
        loaders: {
            vue: {
                transformAssetUrls: {
                    // audio: 'src',
                    // video: 'src',
                    // source: 'src',
                    // object: 'src',
                    // embed: 'src'
                }
            }
        },
        // https://davidparks.dev/blog/add-sounds-to-your-nuxt-site/
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            })
        }
    }
}
