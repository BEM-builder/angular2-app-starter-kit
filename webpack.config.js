var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin  = require('copy-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV || 'development';

var settings = {
    app: './app/app',
    context: '/source',
    path: '/public',
    bundleApp: 'js/main.js',
    bundleCSS: 'css/styles.css',
    chunks: 'js/chunks/[name].js',
    publicPath: NODE_ENV == 'development' ? '/' : '/webpack/public/',
    contentBase: "./public"
};

module.exports = {
    context: __dirname + settings.context,
    entry: { 'vendor': './vendor.ts', 'main': './main.ts' },
    output: {
        path: __dirname + settings.path,
        publicPath: settings.publicPath,
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: settings.chunks
    },
    watch: NODE_ENV == 'development',
    resolve: {
        modulesDirectories: ['node_modules']
    },
    debug: true,
    devtool: NODE_ENV == 'development' ? "inline-source-map" : null,
    resolve: {
        // ensure loader extensions match
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
            // Support for *.json files.
            { test: /\.json$/,  loader: 'json-loader' },

            // Support for CSS as raw text
            { test: /\.css$/,   loader: 'raw-loader' },

            // support for .html as raw text
            { test: /\.html$/,  loader: 'raw-loader' },
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
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
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
        contentBase: settings.contentBase
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
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return root.apply(path, ['node_modules'].concat(args));
}