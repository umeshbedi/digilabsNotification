"use client"

import { MyProvider } from "@/context/MyContext";
import dynamic from "next/dynamic";
import { useState } from "react";

const HeadingText = dynamic(() => import("@/components/HeadingText"), { ssr: false, loading: () => <div>Loading...</div> })
const BellRing = dynamic(() => import("@/components/BellRing"), { ssr: false, loading: () => <div>Loading...</div> })
const SendButton = dynamic(() => import("@/components/SendButton"), { ssr: false, loading: () => <div>Loading...</div> })
const MessageInput = dynamic(() => import("@/components/MessageInput"))

export default function Home() {
  
  const [contextValue, setContextValue] = useState({
    messageBox: true
  });

  const updateContextData = (value) => {
    setContextValue({
      messageBox: value,
    });
  };
  
  

  return (
    <MyProvider value={contextValue}>
      <main className="flex min-h-screen flex-col items-center justify-between pb-20 pt-12 sm:py-16">
        <MessageInput updateContextData={updateContextData}/>
        <HeadingText />
        <BellRing />
        <SendButton updateContextData={updateContextData}/>
      </main>
    </MyProvider>
  );
}
