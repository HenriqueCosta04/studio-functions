/**
 * @Studio
 * @property {string} studio_phone - Phone number to validate
 */
function() {
  let phone = studio_phone.replace(/[^\d]/g, '');
  if (phone.length < 10 || phone.length > 11) return false
  
  if (/^(\d)\1{9,10}$/.test(phone)) return false

  if (phone.length === 11 && phone.charAt(0) !== '1') return false
  if (phone.length === 11 && phone.charAt(1) === '0') return false
  if (phone.length === 11 && phone.charAt(1) === '1') return false

  let soma = 0
  let multiplicador = phone.length === 10 ? 10 : 11
  
  for (let i = 0; i < phone.length - 1; i++) {
    soma += parseInt(phone.charAt(i)) * multiplicador
    multiplicador--
  }

  return true
}
