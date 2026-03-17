/**
 * @Studio
 * @Title Ordenador de Array
 * @property {string} studio_array - Array a ser validado (passe-o entre aspas simples!)
 */
export function sortArray(criteria) {
  const array = JSON.parse(studio_array);

  if (criteria !== 'asc' && criteria !== 'desc') {
    throw new Error(
      'Critério inválido. Use "asc" para ordem crescente ou "desc" para ordem decrescente.',
    );
  }

  const sortedArray = array.sort((a, b) => {
    if (criteria === 'asc') {
      return a - b;
    } else {
      return b - a;
    }
  });
  return {
    msg: `Array ordenado com sucesso! Seus valores ordenados são: ${sortedArray.join(', ')}`,
    success: true,
  };
}
