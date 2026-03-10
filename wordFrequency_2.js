function analisarFrequenciaPalavras(texto, topN) {
  const palavras = texto
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
    .slice(0, topN)
    .map(([palavra, count]) => ({ palavra, count }));
}
