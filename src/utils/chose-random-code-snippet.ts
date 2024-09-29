import codeSnippets from "../../code-snippet.json";
export default function GetCode() {
  const code = Math.floor(Math.random() * 11) + 1;
  return codeSnippets[code];
}
