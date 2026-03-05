/**
 * @Studio
 * @property {string} studio_date - Data a ser formatada do formato DD/MM/YYYY para YYYY-MM-DD
 */
function() {
  let date = studio_date.trim();
  let pattern = /^(\d{2})\/(\d{2})\/(\d{4})$/
  let match = date.match(pattern)
  if (!match) return null

  let day = match[1]
  let month = match[2]
  let year = match[3]

  return `${year}-${month}-${day}`
 */
