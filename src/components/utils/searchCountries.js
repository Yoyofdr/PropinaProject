import removeAccents from 'remove-accents';

/**
 * Busca países por nombre en inglés.
 * @param {string} query - Texto de búsqueda del usuario.
 * @param {Array<Object>} countries - Lista de objetos país.
 * @returns {Array<Object>} - Países coincidentes.
 */
export function searchCountries(query, countries) {
  if (!query) return [];
  const norm = str => removeAccents(str.toLowerCase());
  const q = norm(query);
  return countries.filter(country => {
    return norm(country.name).includes(q);
  });
} 