function saludar(nombre) {
  if (!nombre) {
    return 'Hola Mundo';
  }
  return `Hola ${nombre}`;
}

function sumar(a, b) {
  return a + b;
}

module.exports = { saludar, sumar };