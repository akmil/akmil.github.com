const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
  {
    title: 'List of pages',
    name: 'index',
    source: 'index'
  },
  {
    title: 'Product tile component',
    name: 'product-tile',
    source:'_product-tile/product-tile'
  },
  {
    title: 'Instagram integration',
    name: 'instagram-integration',
    source:'_instagram-integration/instagram-integration'
  }
];

const getHtmlPagesPlugins = (isMinify = false) => {
  const minify = isMinify ? {
      removeComments: true,
      collapseWhitespace: false,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    } : null;

  return pages.map((page) => {
    return new HtmlWebpackPlugin({
      title: page.title,
      inject: true,
      filename: `${page.name}.html`,
      template: path.resolve(__dirname, `../src/pages/${page.source}.handlebars`),
      minify
    });
  });
};

module.exports = {
  dev: getHtmlPagesPlugins(),
  prod: getHtmlPagesPlugins(true)
};
