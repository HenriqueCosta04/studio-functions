function () {
  let str = pre_defined_variable.replace(/[^\x20-\x7E]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, " ").trim()
  return str
}
