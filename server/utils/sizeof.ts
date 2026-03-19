export function sizeof(value: any) {
  if (!value) return 0;
  if (Buffer.isBuffer(value)) return value.length;
  if (typeof value === "string") return Buffer.from(value).length;
  return Buffer.from(JSON.stringify(value)).length;
}
