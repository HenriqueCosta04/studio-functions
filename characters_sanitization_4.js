function sanitizeStrong(str) {
  let new_str = str.replace(/[^\x20-\x7E]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, " ").trim()
  return new_str
}
