export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!re.test(email))
    return { valid: false, msg: 'Formato inválido' }
  return { valid: true, msg: 'E-mail válido' }
}
