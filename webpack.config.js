// path — встроенный в Node.js модуль
const path = require('path');
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Указываем путь до входной точки:
  entry: './src/index.js',
  // Описываем, куда следует поместить результат работы:
  output: {
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, 'dist'),
    // Имя файла со сборкой:
    filename: 'bundle.js'
  },
  // В этом массиве будут перечислены все применяемые лоадеры:
  module: {
    rules: [
      {
        // Это правило будет применяться ко всем файлам,
        // имя которых подойдет под регулярное выражение:
        test: /\.css$/,
        // Список лоадеров, которые применятся к файлу:
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    // При сборке этот плагин будет отображать прогресс в консоли:
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './bundle.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
  ]
}