export function map<T, U>(f: (t: T) => U, val: T | null): U | null {
  return val != null ? f(val) : null;
}

export const ContentType = {
  plain: "text/plain; charset=UTF-8",
  html: "text/html; charset=UTF-8",
  json: "application/json; charset=UTF-8",
};
