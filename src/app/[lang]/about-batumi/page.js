import React from 'react'

export default async function page({params}) {
     const { lang } = await params;
   
  return (
    <div>
        <h1>About Page</h1>
    </div>
  )
}
