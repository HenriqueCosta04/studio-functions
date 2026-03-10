function buscaBinariaAvancada(arr, alvo, comparador = (a, b) => a - b) {
  let esq = 0, dir = arr.length - 1, iteracoes = 0;
  while (esq <= dir) {
    iteracoes++;
    const meio = Math.floor((esq + dir) / 2);
    const cmp = comparador(arr[meio], alvo);
    if (cmp === 0) return { indice: meio, encontrado: true, iteracoes };
    if (cmp < 0) esq = meio + 1;
    else dir = meio - 1;
  }
  return { indice: esq, encontrado: false, iteracoes };
}
