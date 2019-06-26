import path from 'path';
import autoprefixer from 'autoprefixer';
import miniCssExtractPlugin from 'mini-css-extract-plugin';
import htmlWebpackPlugin from 'html-webpack-plugin';

const extractCssPlugin = new miniCssExtractPlugin({
    filename: '[name].[chunkhash:8].css'
});

const javascriptLoader = {
    loader: 'babel-loader',
    options: {
        plugins: ['angularjs-annotate']
    }
};

const htmlIndexPlugin = new htmlWebpackPlugin({
    // on place le fichier index.html à la racine de dist
    // les autres fichiers statiques doivent être placés dans un sous-répertoire
    // voir la propriété output.path de webpack
    filename: 'index.html',
    template: 'index.html',
    inject: 'body',
    minify: {
        collapseWhitespace: false,
        comments: true
    }
});

const rawLoader = {
    loader: 'raw-loader'
};

const cssLoader = {
    loader: 'css-loader'
};

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: [autoprefixer]
    }
};

const sassLoader = {
    loader: 'sass-loader'
};

const imagesLoader = {
    loader: 'url-loader',
    options: {
        limit: 1024,
        name: 'images/[name].[hash:8].[ext]'
    }
};

const config = {
    entry: {
        vendor: './index.js',
        app: './app',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: javascriptLoader,
                include: [path.resolve(__dirname, 'app')]
            },
            {
                test: /\.html$/,
                use: rawLoader
            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, cssLoader, postCssLoader]
            },
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, cssLoader, postCssLoader, sassLoader]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: imagesLoader
            }
        ]
    },
    plugins: [
        extractCssPlugin,
        htmlIndexPlugin
    ],
    devtool: 'eval',
    stats: {
        all: false,
        assets: true,
        errors: true,
        errorDetails: true,
        hash: true,
        performance: true,
        timings: true,
        version: true,
        warnings: true
    }
};

export default config;
