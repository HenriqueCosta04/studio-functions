/**
 * @Studio
 * @property {string} studio_email - Email a ser validado
 */
function() {
  let email = studio_email.trim();
  if (email.length === 0) return false
  if (email.length > 254) return false

  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!pattern.test(email)) return false

  let [localPart, domain] = email.split('@')
  if (localPart.length > 64) return false
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false
  if (domain.startsWith('.') || domain.endsWith('.')) return false

  return true
}
