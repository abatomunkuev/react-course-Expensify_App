// entry point -> output 
const path = require('path');
const MiniExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => {
    const isProduction = env === 'production';
    console.log(env);
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname,'public'),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [MiniExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },{
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }]
            }]
        },
        plugins: [
            new MiniExtractPlugin()
        ],
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true
        }
    };
}
