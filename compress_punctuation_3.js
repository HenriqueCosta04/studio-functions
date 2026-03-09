function compressPunctuation(param) {
  return pre_defined_variable.concat(param).replace(/[.,!?]+/g, ".").replace(/\s+/g, " ").trim().concat(".")
}
