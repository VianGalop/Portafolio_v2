import React from 'react'

function MiniSkills({name, image}) {
  return (
    <div key={name} className="bg-zinc-400 px-5 py-3 rounded-lg text-center w-xl dark:bg-gray-800 dark:text-white max-w-32"    >
        <img src={image} alt={name} className="w-5/6 h-5/6 object-fill" />
        {name}
    </div>
  )
}

export default MiniSkills