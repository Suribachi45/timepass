const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { mensaje } = req.query;
  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${req.horaActual.toLocaleTimeString()}</p>
    ${mensaje ? `<p>${mensaje}</p>` : ''}
    <button><a href="/endroute">Ir a la ruta final</a></button>
  `);
});

module.exports = router;