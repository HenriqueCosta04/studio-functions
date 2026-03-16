import { deepMergeObjects } from '../functions/deepMergeObjects';

describe('deepMergeObjects', () => {
  it('deve mesclar dois objetos profundamente', () => {
    globalThis.studio_obj1 = '{"a": 1, "b": {"c": 2}}';
    globalThis.studio_obj2 = '{"b": {"d": 3}, "e": 4}';
    const result = deepMergeObjects();
    expect(result).toEqual({
      msg: 'Objetos mesclados com sucesso!',
      mergedObject: { a: 1, b: { c: 2, d: 3 }, e: 4 },
      success: true,
    });
  });

  it('deve sobrescrever valores primitivos', () => {
    globalThis.studio_obj1 = '{"a": 1}';
    globalThis.studio_obj2 = '{"a": 2}';
    const result = deepMergeObjects();
    expect(result).toEqual({
      msg: 'Objetos mesclados com sucesso!',
      mergedObject: { a: 2 },
      success: true,
    });
  });

  it('deve lidar com objetos aninhados', () => {
    globalThis.studio_obj1 = '{"a": {"b": {"c": 1}}}';
    globalThis.studio_obj2 = '{"a": {"b": {"d": 2}}}';
    const result = deepMergeObjects();
    expect(result).toEqual({
      msg: 'Objetos mesclados com sucesso!',
      mergedObject: { a: { b: { c: 1, d: 2 } } },
      success: true,
    });
  });
});
