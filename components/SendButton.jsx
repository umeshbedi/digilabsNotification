"use client"
import React, { useEffect, useState } from 'react'

export default function SendButton() {

    const [isPushEnabled, setIsPushEnabled] = useState(false);

    useEffect(() => {
      // Register service worker
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered.');
            setIsPushEnabled(true);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      } else {
        console.warn('Push messaging is not supported');
      }
  
      // Request permission for push notifications
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        }
      });
    }, []);
  
    const sendPushNotification = () => {
      if (isPushEnabled) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification('Hello!', {
            body: 'This is a push notification.',
            icon: '/icon-192x192.png'
          });
        });
      } else {
        console.error('Service Worker not enabled.');
      }
    };

    function sendNotification() {
        Notification.requestPermission()
        .then(e=>{
            if(e==="granted"){
                new Notification("Example Notifications",{
                    body:"This is more text",
                    icon:"/icon-192x192.png",

                })
            }
        })
      }

    return (
        <div class="mybutton-container w-[90%] sm:w-[80%] cursor-pointer" onClick={sendPushNotification}>
            <div class="mybutton">
                <p className=" text-white font-bold">Send Notification</p>
            </div>
        </div>
    )
}
