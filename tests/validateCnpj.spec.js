import { validarCNPJ } from "../functions/validateCnpj";

describe('Validar CNPJ', () => {
  it('deve validar um CNPJ válido', () => {
    globalThis.studio_cnpj = '12.345.678/0001-95';
    expect(validarCNPJ()).toBe(studio_cnpj);
  });

  it('deve lançar um erro para um CNPJ inválido', () => {
    globalThis.studio_cnpj = '12.345.678/0001-00';
    expect(() => validarCNPJ()).toThrow('CNPJ inválido');
  });
});
