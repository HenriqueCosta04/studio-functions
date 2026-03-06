function normalizeText(str) {
  let new_str = pre_defined_variable.replace(/\s+/g," ").replace(/[^\w\s]/g,"").replace(/\b\w/g,c=>c.toUpperCase()).trim()
  return String(new_str).concat(str)
}
