import React from 'react'
import Card from './Card'

const Cards = ({users, handleRemove}) => {
  return (
    <div className='w-full p-4 flex justify-center gap-4 flex-wrap h-96 max-h-96 overflow-auto'>
      {users.map((item, index)=>{
        return <Card handleRemove={handleRemove} id={index} user={item} key={index} />
      })}
    </div>
  )
}

export default Cards