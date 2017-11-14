const path = require("path")
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {

    context: path.resolve(__dirname, "ui"),

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: [".js", ".jsx", ".vue"]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader"
                    }]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    },

    entry: {
        vendor: [
            'vue',
            'vue-router',
            'vuex',

            'element-ui',

            'highcharts',
            'lodash',
            'moment',
            'axios',

            'jquery',
            'selectize'
        ],
        app: ['./app']
    },

    output: {
        path: path.resolve(__dirname, "../src", "main", "resources", "static", "js"),
        filename: '[name]-[chunkhash].js',
        publicPath: '/js/'
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new ExtractTextPlugin("app.css"),

        new ManifestPlugin()
    ],

    devServer: {
        contentBase: path.resolve(__dirname, "mock"),
        compress: true,
        port: 9001,
        disableHostCheck: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        }
    }
}
