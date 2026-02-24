/**
 * @Studio
 * @property {string} studio_cnpj - CNPJ to validate
 */
function() {
  let cnpj = studio_cnpj.replace(/[^\d]/g, '');
  if (cnpj.length !== 14) return false
  if (/^(\d)\1{13}$/.test(cnpj)) return false

  let soma = 0
  let multiplicador = 5
  for (let i = 0; i < 12; i++) {
    soma += parseInt(cnpj.charAt(i)) * multiplicador
    multiplicador = multiplicador === 2 ? 9 : multiplicador - 1
  }

  let primeiroDigito = Math.floor(soma / 11) % 10
  if (parseInt(cnpj.charAt(12)) !== primeiroDigito) return false

  soma = 0
  multiplicador = 6
  for (let i = 0; i < 13; i++) {
    soma += parseInt(cnpj.charAt(i)) * multiplicador
    multiplicador = multiplicador === 2 ? 9 : multiplicador - 1
  }

  let segundoDigito = Math.floor(soma / 11) % 10
  return parseInt(cnpj.charAt(13)) === segundoDigito
}
