/**
 * @Studio
 * @property {string} studio_countryCode - Código do país ('BR', 'US' ou 'ES')
 */
export function validatePhoneNumber(phoneNumber) {
  const phone = phoneNumber.replace(/\D/g, '');
  let re;

  switch (studio_countryCode.toUpperCase()) {
    case 'BR':
      re = /^\d{10,11}$/; // Brasil: 10 ou 11 dígitos
      break;
    case 'US':
      re = /^\d{10}$/; // EUA: 10 dígitos
      break;
    case 'ES':
      re = /^\d{9}$/; // Espanha: 9 dígitos
      break;
    default:
      return { valid: false, msg: 'Código de país não suportado' };
  }

  if (!re.test(phone)) {
    return { valid: false, msg: 'Número de telefone inválido' };
  }

  return { valid: true, msg: 'Número de telefone válido' };
}
