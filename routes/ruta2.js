const express = require('express');
const router = express.Router();
const inicio = require('../middlewares/middlewares');

router.use(inicio);

router.get('/', (req, res) => {
  console.log('Estas en la ruta 2');
  res.send('Esta es la ruta 2');
});

module.exports = router;