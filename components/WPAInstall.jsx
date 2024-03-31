"use client"

import React, { useEffect, useState } from 'react';

export default function WPAInstall() {

    const [deferredPrompt, setDeferredPrompt] = useState(null)
    useEffect(() => {
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault()
        setDeferredPrompt(e)       // can be in global state
      })
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("sw worker registered", reg))
          .catch(() => console.log("failed"))
      }
    return () => {
        window.removeEventListener("beforeinstallprompt", null)
      }
    })

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase()
        return /iphone|ipad|ipod/.test(userAgent)
      }

      const promptAppInstall = async () => {
        if (isIos()) {
          // write pop-up message for IOS here.
        }
        if (!isIos()) {
          if (deferredPrompt) {
            deferredPrompt.prompt()
            await deferredPrompt.userChoice
            setDeferredPrompt(null)
          } else {
            // Do something when app is already installed
            alert("You have already installed app!")
          }
        }
      }

    return (
      <div>
        <button onClick={promptAppInstall}>Install App</button>
      </div>
    );
  };

