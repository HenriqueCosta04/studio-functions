/**
 * @Studio
 * @property {string} studio_texto - Texto a ser analisado
 * @property {number} studio_top_n - Quantidade de palavras mais frequentes a retornar
 */
function AnalisarFrequenciaPalavras() {
  const palavras = studio_texto
    .toLowerCase()
    .replace(/[^\w\sáéíóúãõâêîôûàç]/gi, '')
    .split(/\s+/)
    .filter(p => p.length > 2);

  const frequencia = palavras.reduce((acc, palavra) => {
    acc[palavra] = (acc[palavra] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .slice(0, studio_top_n)
    .map(([palavra, count]) => ({ palavra, count }));
}
