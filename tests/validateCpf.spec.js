import { ValidarCPF } from '../functions/validateCpf';

describe('Validar CPF', () => {
  it('deve validar um CPF válido', () => {
    globalThis.studio_cpf = '123.456.789-09';
    expect(ValidarCPF()).toBe(studio_cpf);
  });

  it('deve lançar um erro para um CPF inválido', () => {
    globalThis.studio_cpf = '123.456.789-00';
    expect(() => ValidarCPF()).toThrow('CPF inválido');
  });
});
