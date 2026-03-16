import { validateEmail } from '../functions/validateEmail';

describe('Validar Email', () => {
  test('Deve validar um email válido', () => {
    const result = validateEmail('test@example.com');
    expect(result).toEqual({ valid: true, msg: 'E-mail válido' });
  });

  test('Deve retornar erro para um email inválido', () => {
    const result = validateEmail('invalid-email');
    expect(result).toEqual({ valid: false, msg: 'Formato inválido' });
  });
});
