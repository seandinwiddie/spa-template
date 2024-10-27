const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Add a rule to handle file types
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/',
      },
    },
  });

  // Customize the config before returning it.
  config.resolve.alias = {
    ...config.resolve.alias,
    // Add any necessary aliases here
  };

  return config;
};
