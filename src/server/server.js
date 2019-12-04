import express from "express";
import webpack from "webpack";
import helmet from "helmet";
import morgan from "morgan";
import { handleRender } from "./utils/handleRender";
import { logger } from "./utils/logger";
import { cacheMiddleware } from "./utils/cache";

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(`${__dirname}/public`));

if (ENV === "development") {
  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

const format =
  ":remote-addr - [:date[iso]] :method :url :status :response-time ms - :res[content-length]";
app.use(morgan(format));
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());

app.use(cacheMiddleware);
app.get("*", handleRender);

app.listen(PORT, err => {
  if (err) logger.error(err);
  logger.info(`Server runding on ${PORT}`);
});
