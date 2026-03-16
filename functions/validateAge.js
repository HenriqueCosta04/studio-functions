/**
 * @Studio
 * @Title Validador de Idade
 * @property {number} studio_age - Idade a ser validada
 */
export function validateAge(minAge, maxAge) {
  const isAValidNumber =
    typeof Number(studio_age) === 'number' &&
    !isNaN(Number(studio_age)) &&
    Number.isInteger(Number(studio_age)) &&
    Number(studio_age) > 0;
  const isInValidRange =
    Number(studio_age) < Number(minAge) || Number(studio_age) > Number(maxAge);

  if (!isAValidNumber)
    return { valid: false, msg: 'Idade deve ser um número válido' };
  if (isInValidRange)
    return {
      valid: false,
      msg: `Idade deve estar entre ${Number(minAge)} e ${Number(maxAge)}`,
    };
  return { valid: true, msg: `Idade válida: ${Number(studio_age)}` };
}
