var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';

var settings = {
    app: { 'vendor': './vendor.ts', 'main': './main.ts' },
    context: '/source',
    path: '/public',
    bundleApp: '/js/[name].js',
    bundleCSS: 'css/styles.css',
    chunks: 'js/chunks/[name].js',
    publicPath: NODE_ENV == 'development' ? '/' : '/webpack/public/',
    contentBase: "./public",
    port: 3000
};

module.exports = {
    context: __dirname + settings.context,
    entry: settings.app,
    output: {
        path: __dirname + settings.path,
        publicPath: settings.publicPath,
        filename: settings.bundleApp,
        chunkFilename: settings.chunks
    },
    watch: NODE_ENV == 'development',
    debug: true,
    devtool: NODE_ENV == 'development' ? "inline-source-map" : null,
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['','.ts','.js','.json','.css','.html']
    },
    module: {
        preLoaders: [{ test: /\.ts$/, loader: 'tslint-loader', exclude: [/node_modules/] }],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader' },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test:   /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!autoprefixer?browsers=last 15 versions!sass?sourceMap'
                )
            },
            {
                test:   /\.(png|jpg|svg)$/,
                loaders: NODE_ENV == 'development' ? ['url?name=img/[path][name].[ext]&limit=4096'] : ['url?name=img/[path][name].[ext]&limit=4096', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
            },
            {
                test:   /\.(ttf|eot|woff|woff2)$/,
                loader: 'file?name=fonts/[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: settings.bundleApp, minChunks: Infinity }),
        new ExtractTextPlugin(settings.bundleCSS),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    tslint: {
        emitErrors: false,
        failOnHint: false
    },
    devServer: {
        contentBase: settings.contentBase,
        port: settings.port
    }
};
if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}