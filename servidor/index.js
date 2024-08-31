const express=require('express');
require('dotenv').config();
var ruta1 = require('../routes/ruta1');
var ruta2 = require('../routes/ruta2');
var ruta3 = require('../routes/ruta3');
var app = express();
const port = process.env.PORT || 3000;

app.use('/ruta1', ruta1);
app.use('/ruta2', ruta2);
app.use('/ruta3', ruta3);

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:'+port);
});