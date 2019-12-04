import fs from "fs";
import { logger } from "./logger";

export const getManifest = () => {
  try {
    if (process.env.NODE_ENV !== "development") {
      return JSON.parse(
        fs.readFileSync(`${__dirname}/../public/manifest.json`, "utf8")
      );
    }
  } catch (err) {
    logger.error(err);
  }

  return {};
};
