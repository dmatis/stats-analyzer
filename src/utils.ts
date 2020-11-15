/**
 * @param dateString DD/MM/YYYY
 */
export const dateStringToDate = (dateString: string): Date => {
  const [ day, month, year ] = dateString.split('/').map((value: string) => parseInt(value));
  return new Date(year, month - 1, day);
}