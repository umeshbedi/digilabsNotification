"use client"

import dynamic from "next/dynamic";

const HeadingText = dynamic(() => import("@/components/HeadingText"), { ssr: false, loading: () => <div>Loading...</div> })
const BellRing = dynamic(() => import("@/components/BellRing"), { ssr: false, loading: () => <div>Loading...</div> })
const SendButton = dynamic(() => import("@/components/SendButton"), { ssr: false, loading: () => <div>Loading...</div> })

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 pt-12 sm:py-16">
      
      <HeadingText />
      
      <BellRing />

      <SendButton/>

      </main>
  );
}
