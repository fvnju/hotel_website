import { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/Components/ui/resizable";

export default function Resizable() {
  const [firstPanelSize, setFirstPanelSize] = useState(50);
  const [secondPanelSize, setSecondPanelSize] = useState(35);
  const styleForDiv = {
    height: "92%",
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFirstPanelSize((prevSize) => prevSize + 10); // Increase by 10
      setSecondPanelSize((prevSize) => prevSize + 5); // Increase by 5
    }, 5000); // After 5 seconds

    return () => clearTimeout(timeoutId);
  }, [firstPanelSize, secondPanelSize]);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-6xl rounded-lg" // Removed border class, kept rounded-xl
    >
      <ResizablePanel defaultSize={firstPanelSize}>
        <div className="flex flex-col h-[400px] items-center justify-center p-6 bg-blue-400 rounded-xl">
          <img src="support.png" alt="..." className="h-20" />{" "}
          {/* Added rounded-lg */}
          <span className="font-semibold">24/7 Customer Support</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical" className="rounded-xl">
          {" "}
          {/* Added rounded-lg */}
          <ResizablePanel defaultSize={secondPanelSize}>
            <div style={styleForDiv}>
              <div className="flex flex-col h-full items-center justify-center p-6 bg-blue-200 rounded-xl m-2">
                <img src="wifi.png" alt="..." className="h-10" />{" "}
                {/* Added rounded-lg */}
                <span className="font-semibold">Free 100Mbps Wifi</span>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75 - secondPanelSize}>
            <div className="flex flex-col h-full items-center justify-center p-6 bg-blue-100 rounded-xl mx-2.5">
              <img src="coffee-cup.png" alt="..." className="h-16" />{" "}
              {/* Added rounded-xl */}
              <span className="font-semibold">Free Breakfast</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
