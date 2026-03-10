/**
 * @Studio
 * @property {string} studio_elementos - Elementos separados por vírgula (ex: "a,b,c")
 * @property {number} studio_tamanho - Tamanho de cada permutação
 */
function GerarPermutacoes() {
  const arr = studio_elementos.split(',').map(s => s.trim());
  const tamanho = studio_tamanho;
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
