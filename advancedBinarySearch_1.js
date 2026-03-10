/**
 * @Studio
 * @property {string} studio_array_json - Array ordenado serializado como JSON
 * @property {number} studio_alvo - Valor a ser encontrado
 */
function BuscaBinariaAvancada() {
  const arr = JSON.parse(studio_array_json);
  const alvo = studio_alvo;
  let esq = 0, dir = arr.length - 1, iteracoes = 0;
  while (esq <= dir) {
    iteracoes++;
    const meio = Math.floor((esq + dir) / 2);
    if (arr[meio] === alvo) return { indice: meio, encontrado: true, iteracoes };
    if (arr[meio] < alvo) esq = meio + 1;
    else dir = meio - 1;
  }
  return { indice: esq, encontrado: false, iteracoes };
}
