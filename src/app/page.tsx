import React, { Suspense } from "react";
import ImageBoxControls from "@/components/CodeImageToolbar";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          <h1>Loading...</h1>
        </div>
      }
    >
      <ImageBoxControls />
      {/* <div className="w-full space-y-4 mt-14 bg-transparent min-h-[calc(100vh-3rem)]">
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
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }
            >
              <CustomThemePopup />
            </Suspense>
          </div> */}
    </Suspense>
  );
}
