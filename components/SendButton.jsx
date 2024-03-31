"use client"
import React from 'react'

export default function SendButton() {

    function sendNotification() {
        Notification.requestPermission()
        .then(e=>{
            if(e==="granted"){
                new Notification("Example Notifications",{
                    body:"This is more text",
                    icon:"/icon-192x192.png",
                    silent:true
                })
            }
        })
      }

    return (
        <div class="mybutton-container w-[90%] sm:w-[80%] cursor-pointer" onClick={sendNotification}>
            <div class="mybutton">
                <p className=" text-white font-bold">Send Notification</p>
            </div>
        </div>
    )
}
