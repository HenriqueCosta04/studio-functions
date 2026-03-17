import { validarCNPJ } from '../functions/validarCNPJ';

describe('Validar CNPJ', () => {
  test('Deve validar um CNPJ válido', () => {
    const cnpj = '12.345.678/0001-95';
    expect(validarCNPJ(cnpj)).toBe('12.345.678/0001-95');
  });

  test('Deve lançar erro para um CNPJ inválido', () => {
    const cnpj = '11.111.111/1111-11';
    expect(() => validarCNPJ(cnpj)).toThrow('CNPJ inválido');
  });
});
