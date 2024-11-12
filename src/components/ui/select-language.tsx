import { useCodeBox } from "@/providers/code-box";
import React from "react";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from "./select";
import languages from "../../../languages.json";

const SelectLanguage = () => {
  const { language, changeLanguage, defaultValues } = useCodeBox();

  return (
    <Select onValueChange={changeLanguage} value={language.value}>
      <SelectTrigger className="control-trigger group min-w-32 [&:nth-child(2)]:[&_span]:data-[state=open]:-translate-x-40">
        <SelectValue asChild>
          <span>
            {language.value === defaultValues.defaultLanguage
              ? `${language.value} (auto)`
              : language.value}
          </span>
        </SelectValue>
        <span className="control-trigger-sine"></span>
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-900 bg-zinc-300">
        {languages.map((lenguage) => (
          <SelectItem key={lenguage.value} value={lenguage.value}>
            {lenguage.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
