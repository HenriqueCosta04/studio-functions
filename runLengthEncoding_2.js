function runLengthEncoding(texto, decomprimir = false) {
  if (decomprimir) {
    return texto.replace(/(\d+)(.)/g, (_, n, c) => c.repeat(parseInt(n)));
  }
  let resultado = '';
  let i = 0;
  while (i < texto.length) {
    let count = 1;
    while (i + count < texto.length && texto[i + count] === texto[i]) count++;
    resultado += `${count}${texto[i]}`;
    i += count;
  }
  return resultado;
}
