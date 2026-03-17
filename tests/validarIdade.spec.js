import { validateAge } from '../functions/validarIdade';

describe('Validar Idade', () => {
  const minAge = 18;
  const maxAge = 99;

  test('Deve validar uma idade válida', () => {
    global.studio_age = 25;
    const result = validateAge(minAge, maxAge);
    expect(result).toEqual({ valid: true, msg: 'Idade válida: 25' });
  });

  test('Deve retornar erro para uma idade inválida (não numérica)', () => {
    global.studio_age = 'vinte';
    const result = validateAge(minAge, maxAge);
    expect(result).toEqual({
      valid: false,
      msg: 'Idade deve ser um número válido',
    });
  });

  test('Deve retornar erro para uma idade fora do intervalo', () => {
    global.studio_age = 17;
    const result = validateAge(minAge, maxAge);
    expect(result).toEqual({
      valid: false,
      msg: `Idade deve estar entre ${minAge} e ${maxAge}`,
    });
  });

  test('Deve retornar erro para uma idade acima do intervalo', () => {
    global.studio_age = 100;
    const result = validateAge(minAge, maxAge);
    expect(result).toEqual({
      valid: false,
      msg: `Idade deve estar entre ${minAge} e ${maxAge}`,
    });
  });
});
