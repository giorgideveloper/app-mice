import React from 'react'

export default async function page({params}) {
  const {id} = await params;
  console.log(id);
  return (
    <div>
        <h1>Article Page</h1>
    </div>
  )
}
