export const ContentType = {
  plain: "text/plain; charset=UTF-8",
  html: "text/html; charset=UTF-8",
  json: "application/json; charset=UTF-8",
};

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}
