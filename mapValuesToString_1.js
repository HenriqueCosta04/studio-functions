/**
 * @Studio
 * @property {string} studio_array - Array de strings
 */
function getArrayValues() {
  try {
    const array = new Array(studio_array);
    return array.join(", ");
  } catch (error) {
    console.error("Erro ao processar o array:", error);
    return null;
  }
}
