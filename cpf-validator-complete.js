/**
 * @Studio
 * @property {string} studio_cpf - CPF to validate (Complete version)
 */
function() {
  let cpf = studio_cpf.replace(/[^\d]/g, '');
  if (cpf.length !== 11) return false
  if (/^(\d)\1{10}$/.test(cpf)) return false

  let soma = 0
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i)
  }

  let primeiroDigito = 11 - (soma % 11)
  primeiroDigito = primeiroDigito > 9 ? 0 : primeiroDigito
  if (parseInt(cpf.charAt(9)) !== primeiroDigito) return false

  soma = 0
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i)
  }

  let segundoDigito = 11 - (soma % 11)
  segundoDigito = segundoDigito > 9 ? 0 : segundoDigito
  return parseInt(cpf.charAt(10)) === segundoDigito
}
