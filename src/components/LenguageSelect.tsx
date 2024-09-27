import { LenguageProps } from "@/types";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import languages from "../../languages.json";
const LenguageSelect = ({
  defaultValue,
  onChange,
}: {
  defaultValue: LenguageProps;

  onChange: React.Dispatch<React.SetStateAction<LenguageProps>>;
}) => {
  return (
    <div>
      <span className="options-label">Lenguage</span>
      <Select
        onValueChange={(value) => {
          console.log(value);
          onChange(languages.find((l) => l.value === value) as LenguageProps);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder="Select a lenguage"
            defaultValue={defaultValue.value}
          />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lenguage) => (
            <SelectItem
              key={lenguage.value}
              value={lenguage.value}
              onClick={() => {
                onChange(lenguage);
              }}
            >
              {lenguage.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LenguageSelect;
