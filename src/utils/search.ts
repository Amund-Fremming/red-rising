function normalize(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export function matchesQuery(entry: { name: string; subtitle: string }, query: string) {
  const needle = normalize(query);
  if (!needle) return true;
  return normalize(`${entry.name} ${entry.subtitle}`).includes(needle);
}
