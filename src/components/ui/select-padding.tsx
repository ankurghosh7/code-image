import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { paddings } from "@/constants";
import React from "react";
import { useImageBox } from "@/providers/image-box";

const SelectPadding = () => {
  const { padding, chnagePadding } = useImageBox();

  return (
    <Select onValueChange={chnagePadding} value={String(padding)}>
      <SelectTrigger className="control-trigger w-24 group min-w-20 [&:nth-child(2)]:[&_span]:data-[state=open]:-translate-x-40">
        <SelectValue />
        <span className="control-trigger-sine"></span>
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-900 bg-zinc-300">
        {paddings.map((p) => (
          <SelectItem key={p} value={String(p)}>
            {p}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectPadding;
