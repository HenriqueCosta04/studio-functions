/**
 * @Studio
 * @property {string} studio_expressao - Expressão matemática como string (ex: "3 + 4 * 2")
 * @property {number} studio_precisao - Casas decimais no resultado
 */
function CalcularExpressaoSegura() {
  const tokens = studio_expressao.match(/(\d+\.?\d*|\+|-|\*|\/|\(|\))/g);
  if (!tokens) throw new Error('Expressão inválida');
  let pos = 0;
  function parseExpr() {
    let left = parseTerm();
    while (pos < tokens.length && (tokens[pos] === '+' || tokens[pos] === '-')) {
      const op = tokens[pos++];
      left = op === '+' ? left + parseTerm() : left - parseTerm();
    }
    return left;
  }
  function parseTerm() {
    let left = parseFactor();
    while (pos < tokens.length && (tokens[pos] === '*' || tokens[pos] === '/')) {
      const op = tokens[pos++];
      const right = parseFactor();
      if (op === '/' && right === 0) throw new Error('Divisão por zero');
      left = op === '*' ? left * right : left / right;
    }
    return left;
  }
  function parseFactor() {
    if (tokens[pos] === '(') { pos++; const val = parseExpr(); pos++; return val; }
    return parseFloat(tokens[pos++]);
  }
  return parseFloat(parseExpr().toFixed(studio_precisao));
}
