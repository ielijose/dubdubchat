import cache from "memory-cache";

const memCache = new cache.Cache();
const duration = 24 * 60 * 1000;

export const cacheMiddleware = (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;

  const cacheContent = memCache.get(key);
  if (cacheContent) {
    res.send(cacheContent);
  } else {
    res.sendResponse = res.send;
    res.send = body => {
      memCache.put(key, body, duration);
      res.sendResponse(body);
    };
    next();
  }
};
