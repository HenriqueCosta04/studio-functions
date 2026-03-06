function normalizeText(str) {
  let new_str = str.replace(/\s+/g," ").replace(/[^\w\s]/g,"").replace(/\b\w/g,c=>c.toUpperCase()).trim()
  return new_str
}
