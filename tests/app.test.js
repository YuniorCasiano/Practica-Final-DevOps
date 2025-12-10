const { saludar, sumar } = require('../src/app');

describe('Pruebas de la aplicacion', () => {
  test('saludar sin nombre retorna Hola Mundo', () => {
    expect(saludar()).toBe('Hola Mundo');
  });

  test('saludar con nombre retorna saludo personalizado', () => {
    expect(saludar('DevOps')).toBe('Hola DevOps');
  });

  test('sumar dos numeros', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('sumar numeros negativos', () => {
    expect(sumar(-1, -1)).toBe(-2);
  });
});