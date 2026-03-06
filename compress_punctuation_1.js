function () {
  let str = pre_defined_variable.replace(/[.,!?]+/g, ".").replace(/\s+/g, " ").trim()
  return str
}
