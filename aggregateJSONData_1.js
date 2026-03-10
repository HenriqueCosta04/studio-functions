/**
 * @Studio
 * @property {string} studio_json_data - JSON serializado com array de objetos
 * @property {string} studio_campo - Nome do campo para agrupar
 * @property {string} studio_operacao - Operação: "soma", "media", "contagem", "max", "min"
 */
function AgregarDadosJSON() {
  const dados = JSON.parse(studio_json_data);
  if (!Array.isArray(dados)) throw new Error('JSON deve ser um array');
  const grupos = dados.reduce((acc, item) => {
    const chave = item[studio_campo] ?? 'indefinido';
    if (!acc[chave]) acc[chave] = [];
    acc[chave].push(item);
    return acc;
  }, {});
  const resultado = {};
  for (const [chave, itens] of Object.entries(grupos)) {
    const valores = itens
      .map(i => Object.values(i).find(v => typeof v === 'number'))
      .filter(v => v !== undefined);
    switch (studio_operacao) {
      case 'soma':      resultado[chave] = valores.reduce((a, b) => a + b, 0); break;
      case 'media':     resultado[chave] = valores.reduce((a, b) => a + b, 0) / valores.length; break;
      case 'contagem':  resultado[chave] = itens.length; break;
      case 'max':       resultado[chave] = Math.max(...valores); break;
      case 'min':       resultado[chave] = Math.min(...valores); break;
      default: throw new Error(`Operação desconhecida: ${studio_operacao}`);
    }
  }
  return resultado;
}
