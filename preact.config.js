import CopyWebpackPlugin from "copy-webpack-plugin";
import asyncPlugin from "preact-cli-plugin-async";

export default config => {
  config.plugins.push(
    new CopyWebpackPlugin([
      { context: `${__dirname}/src/build-root`, from: `*.*` }
    ])
  );
  asyncPlugin(config);
};
