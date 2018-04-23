const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    target: 'node',
    node: {
        fs: 'empty',
    },
    output: {
        filename: 'sort.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [new UglifyJsPlugin()],
}
