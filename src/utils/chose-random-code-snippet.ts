import codeSnippets from "../../code-snippet.json";
export default function GetCode() {
  const code = Math.floor(Math.random() * 11) + 1;
  console.log(code, "code index");
  return codeSnippets[code];
}
