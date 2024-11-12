import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlineInfoCircle } from "react-icons/ai";

const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center gap-1 py-1 px-2 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-md transition-colors">
          <span>About</span>
          <AiOutlineInfoCircle className="size-5" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
