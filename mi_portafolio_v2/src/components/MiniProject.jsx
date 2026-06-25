import React from 'react'

function MiniProject({title, hrefImg, titleImg, description, link}) {
  return (
    <div  key={title}  className="bg-zinc-900 rounded-2xl overflow-hidden">
        <img src={hrefImg} alt={titleImg} className="w-full h-64 object-cover"/>
              <div className="flex justify-between p-6  max-sm:flex-col">
                <div className="w-3/4">
                  <h3 className="text-white text-2xl font-bold mb-3 ">
                    {title}
                  </h3>
                  <p className="text-gray-400">{description}</p>
                </div>
                <div className="flex justify-center  px-2 text-sm text-gray-300 border border-gray-100 max-sm: py-3 my-3">
                  <a className="content-center text-center" href={link}>
                    See Page
                  </a>
                </div>
              </div>
            </div>
  )
}

export default MiniProject