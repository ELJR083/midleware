const express = require('express');
const router = express.Router();
const inicio = require('../middlewares/middlewares');

router.use(inicio);

router.get('/', (req, res) => {
  console.log('esta es la ruta 1');
  res.send('Esta es la ruta 1');
});

module.exports = router;