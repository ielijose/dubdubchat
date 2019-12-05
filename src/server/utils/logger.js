import { createLogger, format, transports } from 'winston';
import packageJson from '../../../package.json';

const APP_NAME = packageJson.name;

const { combine, timestamp, label, printf } = format;

const myFormat = printf(info => {
  return `[${info.timestamp}] ${info.label} | ${info.level.toUpperCase()}: ${info.message}`;
});

export const logger = createLogger({
  format: combine(
    label({ label: APP_NAME }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSSS',
    }),
    myFormat,
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});
