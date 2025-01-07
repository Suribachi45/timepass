module.exports = (req, res, next) => {
    const { horaActual } = req;
    const hours = horaActual.getHours();
    if (hours >= 12 && hours < 24) {
      next();
    } else {
      res.locals.mensaje = 'Aún no es la hora, espera hasta las 12:00 para entrar';
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
  };