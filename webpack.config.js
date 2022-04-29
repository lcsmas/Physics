const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        library: {
            name: 'playable',
            type: 'umd',
        },
    },
    plugins: [new HtmlWebpackPlugin({template: "webpack-template.html"})],
    devServer: {
        static: {
            directory : "./dist"
        }
    }
}
