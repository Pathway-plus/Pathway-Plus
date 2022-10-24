export function objToQuery(obj: Record<string, string | number>) {
  const queries = [];
  for (const key in obj) {
    queries.push(`${key}=${obj[key]}`);
  }
  return queries.join("&");
}