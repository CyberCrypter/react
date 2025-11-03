import React from "react";

function Card({image, name, profes,index, friends,  handleFriendsButton}){
 

    return (
        <div className="w-50 bg-white rounded-md overflow-hidden">
            <div className="w-full h-40 bg-sky-200">
                <img className="w-full h-full object-cover object-[center_top]" src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profes}</h5>
                <button onClick={()=>handleFriendsButton(index)} className="px-3 mt-4 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">{friends === true ? "Friends" : "Add Friend"}</button>
            </div>
        </div>
    )
}

export default Card