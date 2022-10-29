export function objToQuery(obj: Record<string, any >) {
  const queries = [];
  for (const key in obj) {
    queries.push(`${key}=${obj[key]}`);
  }
  return queries.join("&");
}