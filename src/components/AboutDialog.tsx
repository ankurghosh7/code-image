"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AboutDialog = ({ button }: { button: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>About</DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-center font-medium text-lg">
            Working on feature and shortcut keys
          </p>
        </div>
        <DialogFooter className="hidden lg:block">
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
