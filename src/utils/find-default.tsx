type DefaultItem = { default?: boolean };

export function findDefault<T extends DefaultItem>(arr: T[]) {
  return arr.find((item) => item?.default === true);
}
