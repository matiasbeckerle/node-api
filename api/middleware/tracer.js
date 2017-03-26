export default function tracer(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};
