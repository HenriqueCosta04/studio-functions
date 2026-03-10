function gerarPermutacoes(arr, tamanho = arr.length) {
  if (tamanho > arr.length) return [];
  if (tamanho === 1) return arr.map(el => [el]);
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    const restante = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const sub = gerarPermutacoes(restante, tamanho - 1);
    sub.forEach(p => resultado.push([arr[i], ...p]));
  }
  return resultado;
}
