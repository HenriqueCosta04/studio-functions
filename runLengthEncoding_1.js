/**
 * @Studio
 * @property {string} studio_texto - Texto a ser processado
 * @property {boolean} studio_decomprimir - Se true, descomprime; se false, comprime
 */
function RunLengthEncoding() {
  if (studio_decomprimir) {
    return studio_texto.replace(/(\d+)(.)/g, (_, n, c) => c.repeat(parseInt(n)));
  }
  let resultado = '';
  let i = 0;
  while (i < studio_texto.length) {
    let count = 1;
    while (i + count < studio_texto.length && studio_texto[i + count] === studio_texto[i]) count++;
    resultado += `${count}${studio_texto[i]}`;
    i += count;
  }
  return resultado;
}
