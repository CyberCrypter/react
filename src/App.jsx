import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

const data = [
  {image: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", name: "Believer", artist: "cherry", added: false},
  {image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", name: "chaiya", artist: "shah rukh", added: false},
  {image: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=712", name: "sukoon", artist: "sulai saleman", added: false},
  {image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=974", name: "attention", artist: "jiten", added: true}
];

const [songData, setSongData] = useState(data);

const handleClick = (index) => {
  setSongData((prev)=>{
    return prev.map((item, itemindex)=>{
      if(itemindex === index) return {...item, added: !item.added};
      return item;
    })
  })

}

  return (
    <>
      <div className='w-full h-screen bg-zinc-300'>
          <Navbar data={songData}/>
          <div className='px-20 flex gap-10 mt-10 flex-wrap'>
            {songData.map((obj,index)=> (
              <Card data={obj} handleClick={handleClick} index={index} key={index}/>
              ))}
          </div>
      </div>
    </>
  )
}

export default App