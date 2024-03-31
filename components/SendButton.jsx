"use client"
import React from 'react'

export default function SendButton() {

    function sendNotification() {
        alert("clicked")
      }

    return (
        <div class="mybutton-container w-[90%] sm:w-[80%] cursor-pointer" onClick={sendNotification}>
            <div class="mybutton">
                <p className=" text-white font-bold">Send Notification</p>
            </div>
        </div>
    )
}
