const express = require('express');
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

const app = express();
const port = 3000;

app.use(horaMiddleware);

app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});