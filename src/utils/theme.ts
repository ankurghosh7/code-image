import themes from "../../default-theme.json";

export function filterColor(color: string[], deg?: number) {
  if (color.length <= 1) {
    return color[0];
  }
  if (color.length <= 2) {
    return `linear-gradient(${deg}deg, ${color[0]}, ${color[1]})`;
  }

  return `linear-gradient(${deg}deg, ${color[0]}, ${color[1]}, ${color[2]})`;
}

export function findTheme(name: string) {
  const findTheme = themes.find((t) => t.name === name);
  if (!findTheme) return themes[0];

  return findTheme;
}
