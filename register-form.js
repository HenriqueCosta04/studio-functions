/**
 * @Studio
 * @property {string} studio_email - Email a ser validado
 * @property {string} studio_password - Senha a ser validada
 * @property {string} studio_confirm_password - Confirmação de senha a ser validada
 */
function() {
  let email = studio_email.trim();
  let password = studio_password.trim();
  let confirmPassword = studio_confirm_password.trim();

  if (email.length === 0) return false
  if (email.length > 254) return false
  if (password.length === 0) return false
  if (password !== confirmPassword) return false

  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!pattern.test(email)) return false

  let [localPart, domain] = email.split('@')
  if (localPart.length > 64) return false
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false
  if (domain.startsWith('.') || domain.endsWith('.')) return false

  return true
}
