/**
 * @Studio
 * @property {string} studio_creditcard - Credit Card to validate
 */
function() {
  let creditcard = studio_creditcard.replace(/[^\d]/g, '');
  if (creditcard.length < 13 || creditcard.length > 19) return false
  
  if (/^(\d)\1{12,18}$/.test(creditcard)) return false

  let soma = 0
  let dobro = false

  for (let i = creditcard.length - 1; i >= 0; i--) {
    let digito = parseInt(creditcard.charAt(i))
    
    if (dobro) {
      digito *= 2
      if (digito > 9) digito -= 9
    }
    
    soma += digito
    dobro = !dobro
  }

  return soma % 10 === 0
}
