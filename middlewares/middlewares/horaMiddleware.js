module.exports = (req, res, next) => {
    const now = new Date();
    req.horaActual = now;
    next();
  };