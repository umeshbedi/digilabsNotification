import React, { useContext, useState } from 'react'
import { VerifySend } from './VerifySend';
import MyContext from '@/context/MyContext';

export default function MessageInput({updateContextData}) {

    const [title, setTitle] = useState("Notification")
    const [message, setMessage] = useState("This is Test Message from DigiLabs App")
    const [animationName, setAnimationName] = useState("")
    const context = useContext(MyContext)
    return (
        <div className={`absolute w-full h-screen bg-[rgba(0,0,0,.5)] top-0 z-20 ${context.messageBox?'hidden':'flex'} justify-center items-center overflow-y-hidden`}>
            <div className='messageInputBox w-[90%] sm:w-[344px] p-[2px] bg-[#CE722C] flex justify-center items-center rounded-[10px]'>
                <div className='w-full h-full bg-[rgb(0,0,0)] p-5 rounded-[10px] relative'>
                    
                    <p onClick={()=>updateContextData(true)} className='absolute text-[#CE722C] right-4 top-4 cursor-pointer'>&#10006;</p>

                    <form onSubmit={(e)=>{e.preventDefault();VerifySend({title:title, message:message})}}>

                        <div className='flex flex-col justify-center gap-5'>
                        <div>
                            <p className=' text-gray-400'>Enter Title</p>
                            <input type="text" required name='title' onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <p className=' text-gray-400'>Enter Message</p>
                            <input type="text" required name='message' onChange={(e)=>setMessage(e.target.value)}/>
                        </div>
                        <input type="submit" value="Send Now" className='bg-[#CE722C]'/>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}