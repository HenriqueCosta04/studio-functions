function agregarDadosJSON(jsonData, campo, operacao) {
  const dados = JSON.parse(jsonData);
  if (!Array.isArray(dados)) throw new Error('JSON deve ser um array');
  const grupos = dados.reduce((acc, item) => {
    const chave = item[campo] ?? 'indefinido';
    if (!acc[chave]) acc[chave] = [];
    acc[chave].push(item);
    return acc;
  }, {});
  const resultado = {};
  for (const [chave, itens] of Object.entries(grupos)) {
    const valores = itens
      .map(i => Object.values(i).find(v => typeof v === 'number'))
      .filter(v => v !== undefined);
    switch (operacao) {
      case 'soma':      resultado[chave] = valores.reduce((a, b) => a + b, 0); break;
      case 'media':     resultado[chave] = valores.reduce((a, b) => a + b, 0) / valores.length; break;
      case 'contagem':  resultado[chave] = itens.length; break;
      case 'max':       resultado[chave] = Math.max(...valores); break;
      case 'min':       resultado[chave] = Math.min(...valores); break;
      default: throw new Error(`Operação desconhecida: ${operacao}`);
    }
  }
  return resultado;
}
