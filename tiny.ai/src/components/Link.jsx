import React from 'react';
import { useState } from 'react';
const Link = () => {
    const [link,setLink]=useState("Paste your link here !");
    const [print,setPrint]=useState(false);
    function getData(val){
      setLink(val.target.value);
    }
    console.log(print?link:null)
   
  return (
    <div className="link-container">
    <input type="text" className="input-link" 
     placeholder={link}
     onChange={getData}/>
    <button className="btn"
    onClick={()=>setPrint(true)}
    >Submit
    </button>
     </div>
  )
}

export default Link