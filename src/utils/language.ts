import languages from "../../languages.json";
import { defaultSize, sizes } from "@/constants";
export function findLanguage(le: string) {
  const find = languages.find((l) => l.value === le);

  if (!find) {
    return languages[6];
  }

  return find;
}

export function findSize(size: string) {
  const find = sizes.find((l) => l.name === size);

  if (!find) {
    return findSize(defaultSize);
  }
  return find;
}
