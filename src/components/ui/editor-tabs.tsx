import React from "react";
import { useCodeBox } from "@/providers/code-box";
import * as Tabs from "@radix-ui/react-tabs";
import { tabs as tabsList } from "@/constants";

const FormatTabs = () => {
  const { tab, chnageTab } = useCodeBox();

  return (
    <Tabs.Root value={String(tab)} onValueChange={chnageTab}>
      <Tabs.List className="flex items-center gap-2 transition-all duration-300 ease-in-out">
        {tabsList.map((t) => (
          <Tabs.Trigger
            key={t}
            value={String(t)}
            className="py-1 px-2 rounded-lg data-[state=active]:dark:bg-zinc-900 data-[state=active]:bg-zinc-300 data-[state=active]:ring-1 data-[state=active]:hover:ring-offset-1  hover:ring-offset-gray-400 dark:hover:ring-offset-zinc-800 ring-orange-400 transition-all  text-sm  duration-500 ease-in-out dark:hover:bg-zinc-900"
          >
            {t}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default FormatTabs;
