const express = require('express');
const { saludar } = require('./app');

const app = express();
const PORT = process.env.PORT || 3001; // Cambiar a 3001

app.get('/', (req, res) => {
  const mensaje = saludar();
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Practica DevOps</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: white;
          color: black;
        }
        h1 { 
          font-size: 3em; 
          margin: 0; 
        }
      </style>
    </head>
    <body>
      <h1>${mensaje}</h1>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = app;