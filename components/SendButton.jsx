"use client"
import MyContext from '@/context/MyContext'
import React, { useContext, useEffect, useState } from 'react'

export default function SendButton({updateContextData}) {
    const context = useContext(MyContext)
    return (
        <div class="mybutton-container w-[90%] sm:w-[344px] cursor-pointer animate-pulse" 
        onClick={()=>updateContextData(false)}
        >
            <div class="mybutton">
                <p className=" text-white font-bold">Send Notification</p>
            </div>
    
        </div>
    )
}
