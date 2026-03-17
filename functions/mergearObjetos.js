/**
 * @Studio
 * @Title Deep Merge de Objetos
 * @property {string} studio_obj1 - Primeiro objeto a ser mesclado (passe-o entre aspas simples!)
 * @property {string} studio_obj2 - Segundo objeto a ser mesclado (passe-o entre aspas simples!)
 */
export function deepMergeObjects() {
  const obj1 = JSON.parse(studio_obj1);
  const obj2 = JSON.parse(studio_obj2);

  function mergeDeep(target, source) {
    for (const key in source) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key])
      ) {
        if (!target[key]) {
          target[key] = {};
        }
        mergeDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }

  const mergedObject = mergeDeep({ ...obj1 }, obj2);
  return {
    msg: 'Objetos mesclados com sucesso!',
    mergedObject,
    success: true,
  };
}
