function getArrayValues(studio_array) {
  try {
    const array = new Array(studio_array);
    return array.join(", ");
  } catch (error) {
    console.error("Erro ao processar o array:", error);
    return null;
  }
}
