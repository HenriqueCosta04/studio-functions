function generateSlug(str) {
  let new_str = str.replace(/[^\w\s]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").toLowerCase()
  return new_str
}
