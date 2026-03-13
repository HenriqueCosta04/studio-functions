import { validatePhoneNumber } from '../functions/validatePhoneNumber';

describe('Validar Número de Telefone', () => {
  global.studio_countryCode = 'BR';

  test('Deve validar um número de telefone válido para Brasil', () => {
    const result = validatePhoneNumber('(11) 91234-5678');
    expect(result).toEqual({ valid: true, msg: 'Número de telefone válido' });
  });

  test('Deve retornar erro para um número de telefone inválido para Brasil', () => {
    const result = validatePhoneNumber('12345');
    expect(result).toEqual({
      valid: false,
      msg: 'Número de telefone inválido',
    });
  });

  test('Deve retornar erro para um código de país não suportado', () => {
    global.studio_countryCode = 'FR';
    const result = validatePhoneNumber('1234567890');
    expect(result).toEqual({
      valid: false,
      msg: 'Código de país não suportado',
    });
  });
});
