import React, { Suspense } from "react";
import ImageBoxControls from "@/components/Toolbar";
import ImageBox from "@/components/ImageBox";

export default function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageBoxControls />
      </Suspense>
      <div className="w-full space-y-4 mt-14 bg-transparent h-full">
        <div className="flex justify-start md:justify-center bg-transparent relative">
          <Suspense
            fallback={
              <div>
                <h1>Loading...</h1>
              </div>
            }
          >
            <ImageBox />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
