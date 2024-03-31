import Image from 'next/image'
import React from 'react'

export default function BellRing() {
  
    function Ring({ num }) {
        return <div className={`ringAll ring${num}`} />
      }
  
    return (
    <div>
        <div className="bellback w-[100px] h-[100px] rounded-full flex justify-center items-center relative">
          {Array(5).fill(0).map((item, i)=>(
            <Ring key={i} num={i}/>
          ))}

          <div className="relative w-[70px] h-[70px]">
            <Image fill src={"/bell.svg"} alt="bell icon" />
          </div>

        </div>
      </div>
      
  )
}
