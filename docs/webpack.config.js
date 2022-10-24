const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, options) => {
    const isDevMode = options.mode === 'development';

    let favIconSrc = 'images/favicon.svg';

    if (isDevMode) {
        favIconSrc = 'src/images/favicon.svg';
    }

    return {
        entry: {
            bundle: './src/index.jsx',
            commons: ['react-syntax-highlighter'],
        },
        devServer: {
            historyApiFallback: true,
            port: 8082,
        },
        output: {
            path: path.join(__dirname, './build'),
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[chunkhash].js',
            publicPath: '/',
        },
        devtool: 'source-map',
        mode: isDevMode ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            root: path.join(__dirname, '..'),
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    include: [
                        path.join(__dirname, 'src'),
                        path.join(__dirname, '../src'),
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer(),
                                ],
                                sourceMap: true,
                            },
                        },
                        'resolve-url-loader',
                        `sass-loader?outputStyle=expanded&includePaths[]=${path.resolve(__dirname, 'src/scss')}&includePaths[]=${path.resolve(__dirname, '../src/scss')}`,
                    ],
                }, {
                    test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff(2)?)(\?[a-z0-9=.]+)?$/,
                    loader: 'file-loader?name=[path][name].[ext]?[hash]&context=./src',
                }, {
                    test: /\.(sketch|pdf?)(\?[a-z0-9=.]+)?$/,
                    loader: 'file-loader?name=files/[name].[ext]?[hash]&context=./src',
                },
            ],
        },
        resolve: {
            extensions: [
                '.eot',
                '.gif',
                '.ico',
                '.jpg',
                '.js',
                '.json',
                '.jsx',
                '.pdf',
                '.png',
                '.scss',
                '.sketch',
                '.svg',
                '.ts',
                '.tsx',
                '.ttf',
                '.woff',
                '.woff2',
            ],
            modules: [
                'node_modules',
                'src',
                '../src',
            ],
            alias: {
                classnames: path.resolve(__dirname, '../node_modules/classnames'),
                lodash: path.resolve(__dirname, '../node_modules/lodash'),
                'moment-timezone': path.resolve('../node_modules/moment-timezone'),
                'prop-types': path.resolve(__dirname, '../node_modules/prop-types'),
                react: path.resolve(__dirname, '../node_modules/react'),
                'react-custom-scrollbars': path.resolve(__dirname, '../node_modules/react-custom-scrollbars'),
                'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
                'react-cm-ui': path.resolve(__dirname, '../src'),
                'react-responsive': path.resolve(__dirname, '../node_modules/react-responsive'),
                'css-cm-ui': path.resolve(__dirname, '../src/style.scss'),
            },
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    sourceMap: true,
                    terserOptions: {
                        mangle: false, // Pass false to skip mangling names.
                        safari10: true,
                    },
                }),
            ],
            splitChunks: {
                minChunks: Infinity,
                name: 'commons',
            },
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                proxy: {
                    '*': 'http://0.0.0.0:5000',
                },
            }),
            new FaviconsWebpackPlugin(favIconSrc),
            new HtmlWebpackPlugin({
                title: 'React-CM-UI Docs',
                template: 'template.ejs',
            }),
            new MiniCssExtractPlugin({
                allChunks: true,
                filename: 'css/bundle.css',
                ignoreOrder: true,
            }),
            new webpack.DefinePlugin({
                __UI_PACKAGE_VERSION__: (typeof process.env.CM_UI_DOCS_VERSION === 'undefined') ?
                    '"X.X.X"' : `"${process.env.CM_UI_DOCS_VERSION}"`,
            }),
        ],
    };
};
