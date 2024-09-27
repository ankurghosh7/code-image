import { LenguageProps } from "@/types";

export function findLanguage(le: string, languages: LenguageProps[]) {
  const find = languages.find((l) => l.value === le);

  if (!find) {
    return languages[6];
  }

  return find;
}
