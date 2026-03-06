function generateSlug() {
  let str = pre_defined_variable.replace(/[^\w\s]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").toLowerCase()
  return str
}
