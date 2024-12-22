import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlineInfoCircle } from "react-icons/ai";

const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full transition-colors">
          <AiOutlineInfoCircle className="size-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>About</DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-center font-medium text-lg">
            Working on feature and shortcut keys
          </p>
        </div>
        <DialogFooter>
          <div className="mt-3 flex items-center justify-center">
            <p className="text-sm">
              Want more features? or{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Repot a bug!
              </a>
            </p>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
