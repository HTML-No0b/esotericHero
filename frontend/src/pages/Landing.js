import React from 'react'

const Landing = () => {
  return (
    <div> 
    
    <head>
      <meta charset="utf-8" />
      <title>Landing gradients</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="stylesheet" href="./static/output.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </head>
  
    <body className="h-screen bg-gradient-to-br from-slate-600 to-slate-900">
      <div
        className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12"
      >
        <div className="flex space-x-12 space-y-2">
          <h1 className="font-Raleway text-5xl font-Large">ESOTERIC</h1>
        </div>
  
        <div className="h-32 md:h-40"></div>
  
        <p
          className="font-sans text-3xl font-bold text-gray-200 max-w-3xl lg:text-6xl lg:pr-24 md:text-6xl"
        >
          Connect with like minded individuals to share and explore thoughts about coding
        </p>
        
      
  </div>
       
    </body>
  
  </div>

  
  )
}

export default Landing