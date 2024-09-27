import React from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-git";
import "prismjs/components/prism-http";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-java";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-js-extras";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-python";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-diff";
import "prismjs/components/prism-django";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-erlang";
import "prismjs/components/prism-fortran";
import "prismjs/components/prism-gherkin";
import "prismjs/components/prism-go";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-groovy";
import "prismjs/components/prism-haml";
import "prismjs/components/prism-handlebars";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-haxe";
import "prismjs/components/prism-http";
import "prismjs/components/prism-ichigojam";
import "prismjs/components/prism-java";
// import "prismjs/components/prism-javadoc";
import "prismjs/components/prism-javadoclike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-js-extras";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsonp";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-latex";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-python";
import "prismjs/components/prism-r";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-scheme";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-stylus";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-wasm";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-twilight.css";

//Example style, you can use another
const CodeBox = ({
  code,
  language,
  setEditorValue,
}: {
  code: string;
  language: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <Editor
        value={code}
        onValueChange={(code) => setEditorValue(code)}
        highlight={(code) =>
          prism.highlight(code, prism.languages[language], language)
        }
        textareaClassName="focus:outline-none"
        tabSize={4}
      />
    </div>
  );
};

export default CodeBox;
