import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { handleRender } from './utils/handleRender';
import { logger } from './utils/logger';
import { cacheMiddleware } from './utils/cache';

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

if (ENV === 'development') {
  /* eslint-disable global-require */
  // eslint-disable-next-line import/no-extraneous-dependencies
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  /* eslint-enable global-require */

  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(cacheMiddleware);
}

app.use(express.static(`${__dirname}/public`));

const format =
  ':remote-addr - [:date[iso]] :method :url :status :response-time ms - :res[content-length]';
app.use(morgan(format));
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());

app.get('*', handleRender);

app.listen(PORT, err => {
  if (err) logger.error(err);
  logger.info(`Server runding on ${PORT}`);
});
