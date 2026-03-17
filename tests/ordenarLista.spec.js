import { sortArray } from '../functions/ordenarLista.js';

describe('sortArray', () => {
  it('deve ordenar o array em ordem crescente', () => {
    globalThis.studio_array = '[5, 3, 8, 1]';
    const criteria = 'asc';
    const result = sortArray(criteria);
    expect(result).toEqual({
      msg: 'Array ordenado com sucesso! Seus valores ordenados são: 1, 3, 5, 8',
      success: true,
    });
  });

  it('deve ordenar o array em ordem decrescente', () => {
    globalThis.studio_array = '[5, 3, 8, 1]';
    const criteria = 'desc';
    const result = sortArray(criteria);
    expect(result).toEqual({
      msg: 'Array ordenado com sucesso! Seus valores ordenados são: 8, 5, 3, 1',
      success: true,
    });
  });

  it('deve retornar mensagem de erro para critério inválido', () => {
    globalThis.studio_array = '[5, 3, 8, 1]';
    const criteria = 'invalid';
    expect(() => sortArray(criteria)).toThrow(
      'Critério inválido. Use "asc" para ordem crescente ou "desc" para ordem decrescente.',
    );
  });
});
