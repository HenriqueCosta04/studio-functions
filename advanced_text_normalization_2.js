function normalizeText() {
  let str = pre_defined_variable.replace(/\s+/g," ").replace(/[^\w\s]/g,"").replace(/\b\w/g,c=>c.toUpperCase()).trim()
  return str
}
