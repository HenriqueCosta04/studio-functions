function compressPunctuation(str) {
  let new_str = pre_defined_variable.replace(/[.,!?]+/g, ".").replace(/\s+/g, " ").trim()
  return new_str + str
}
