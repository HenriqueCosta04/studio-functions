function compressPunctuation(str) {
  let new_str = str.replace(/[.,!?]+/g, ".").replace(/\s+/g, " ").trim()
  return new_str
}
