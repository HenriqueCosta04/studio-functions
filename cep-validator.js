/**
 * @Studio
 * @property {string} studio_cep - CEP (Postal Code) to validate
 */
function() {
  let cep = studio_cep.replace(/[^\d]/g, '');
  if (cep.length !== 8) return false
  
  if (/^(\d)\1{7}$/.test(cep)) return false

  let primeirosCinco = cep.substring(0, 5)
  let ultimosTres = cep.substring(5)

  if (primeirosCinco === '00000' || ultimosTres === '000') return false

  let validRanges = [
    { min: 1000, max: 19999 },
    { min: 20000, max: 28999 },
    { min: 29000, max: 39999 }
  ]

  let region = parseInt(primeirosCinco.substring(0, 2))
  
  return region >= 1 && region <= 99
}
