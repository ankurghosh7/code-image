export function formatCodeWithTabSize(code: string, tabSize: number) {
  // Define the string for the new tab size (e.g., 2 spaces, 4 spaces, etc.)
  const newTab = " ".repeat(tabSize);

  // Replace 4 spaces with the selected tab size
  const formattedCode = code.replace(/ {4}/g, newTab);

  return formattedCode;
}
