import React from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
// import "@/styles/code-highlight.css";
import { formatCodeWithTabSize } from "@/utils/format-code";
import "highlight.js/styles/gradient-dark.css";
const CodeBox = ({
  code,
  language,
  setEditorValue,
  tab,
  mode,
}: {
  code: string;
  language: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
  tab: number;
  mode: "dark" | "light";
}) => {
  const textColor = mode === "dark" ? "text-white" : "text-black";
  const codeWithTab = formatCodeWithTabSize(code, tab);

  return (
    <>
      <Editor
        value={codeWithTab}
        onValueChange={(code) => setEditorValue(code)}
        highlight={(code) =>
          hljs.highlight(code, {
            language: language,
            ignoreIllegals: true,
          }).value
        }
        textareaClassName="focus:outline-none code-text select-text"
        preClassName={textColor}
        tabSize={tab}
        insertSpaces
      />
    </>
  );
};

export default CodeBox;
