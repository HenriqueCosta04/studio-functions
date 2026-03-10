function estatisticasDescritivias(dados, opcoes = {}) {
  const { populacao = false, percentis = [25, 50, 75] } = opcoes;
  if (!dados.length) throw new Error('Array vazio');
  const ordenado = [...dados].sort((a, b) => a - b);
  const n = dados.length;
  const media = dados.reduce((a, b) => a + b, 0) / n;
  const variancia = dados.reduce((acc, v) => acc + (v - media) ** 2, 0) / (populacao ? n : n - 1);
  function percentil(p) {
    const idx = (p / 100) * (n - 1);
    const baixo = Math.floor(idx);
    return ordenado[baixo] + (ordenado[Math.ceil(idx)] - ordenado[baixo]) * (idx - baixo);
  }
  const freq = dados.reduce((acc, v) => { acc[v] = (acc[v] || 0) + 1; return acc; }, {});
  const modaFreq = Math.max(...Object.values(freq));
  return {
    n, media: parseFloat(media.toFixed(6)),
    mediana: percentil(50),
    moda: Object.keys(freq).filter(k => freq[k] === modaFreq).map(Number),
    min: ordenado[0], max: ordenado[n - 1],
    amplitude: ordenado[n - 1] - ordenado[0],
    variancia: parseFloat(variancia.toFixed(6)),
    desvioPadrao: parseFloat(Math.sqrt(variancia).toFixed(6)),
    coeficienteVariacao: parseFloat((Math.sqrt(variancia) / media * 100).toFixed(2)),
    percentis: Object.fromEntries(percentis.map(p => [`p${p}`, percentil(p)])),
  };
}
