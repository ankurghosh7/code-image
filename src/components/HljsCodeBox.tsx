import React from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
// import "highlight.js/styles/atom-one-dark.css";
const HljsCodeBox = ({
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
  return (
    <div>
      <Editor
        value={code}
        onValueChange={(code) => setEditorValue(code)}
        highlight={(code) =>
          hljs.highlight(code, {
            language: language,
            ignoreIllegals: true,
          }).value
        }
        textareaClassName="focus:outline-none"
        preClassName={textColor}
        tabSize={tab}
      />
    </div>
  );
};

export default HljsCodeBox;
