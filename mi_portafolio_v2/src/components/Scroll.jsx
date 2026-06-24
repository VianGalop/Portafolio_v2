import React from 'react'
import iconScroll from "../../public/img/muevase.png"

export const Scroll = () => {
  return (
      <i className="fixed right-2 bottom-6 cursor-pointer sm:right-2" id="scroll-up">
        <a href="#hero" >
            <img src={iconScroll} className="w-8 h-8" alt="Arriba"/>
        </a>
      </i>
  )
}