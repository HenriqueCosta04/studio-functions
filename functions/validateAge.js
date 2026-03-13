/**
 * @Studio
 * @property {number} studio_age - Idade a ser validada
 */
export function validateAge(minAge, maxAge) {
  const isAValidNumber =
    typeof studio_age === 'number' &&
    !isNaN(studio_age) &&
    Number.isInteger(studio_age) &&
    studio_age > 0;
  const isInValidRange = studio_age < minAge || studio_age > maxAge;

  if (!isAValidNumber)
    return { valid: false, msg: 'Idade deve ser um número válido' };
  if (isInValidRange)
    return {
      valid: false,
      msg: `Idade deve estar entre ${minAge} e ${maxAge}`,
    };
  return { valid: true, msg: `Idade válida: ${studio_age}` };
}
