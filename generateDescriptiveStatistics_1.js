/**
 * @Studio
 * @property {string} studio_dados_json - Array de números serializado como JSON
 * @property {boolean} studio_populacao - Usar desvio padrão populacional
 */
function EstatisticasDescritivias() {
  const dados = JSON.parse(studio_dados_json);
  if (!dados.length) throw new Error('Array vazio');
  const ordenado = [...dados].sort((a, b) => a - b);
  const n = dados.length;
  const media = dados.reduce((a, b) => a + b, 0) / n;
  const variancia = dados.reduce((acc, v) => acc + (v - media) ** 2, 0) / (studio_populacao ? n : n - 1);
  function percentil(p) {
    const idx = (p / 100) * (n - 1);
    const baixo = Math.floor(idx);
    return ordenado[baixo] + (ordenado[Math.ceil(idx)] - ordenado[baixo]) * (idx - baixo);
  }
  return {
    n, media: parseFloat(media.toFixed(6)),
    mediana: percentil(50),
    min: ordenado[0], max: ordenado[n - 1],
    amplitude: ordenado[n - 1] - ordenado[0],
    desvioPadrao: parseFloat(Math.sqrt(variancia).toFixed(6)),
    p25: percentil(25), p75: percentil(75),
  };
}
