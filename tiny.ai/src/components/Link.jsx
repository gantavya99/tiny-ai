import React from 'react';
import { useState } from 'react';
const Link = ({setLink,link}) => {
    
    const onClickShortner = function(){
      if(link === "") {
        alert("Please enter a URL");
        return;
      }
    }
   
  return (
    <div className="link-container">
    <input type="text" className="input-link" 
     placeholder="Paste your link here"
     value={link}
     onChange={(e)=>{setLink(e.target.value)}}/>

    <button className="btn"
    onClick={()=>{
      fetchData();
    }}
    >Submit </button>
  
     
     </div>
  )

}

export default Link