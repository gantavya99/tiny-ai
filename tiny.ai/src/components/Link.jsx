import React from 'react';
import { useState } from 'react';
const Link = () => {
    const [link,setLink]=useState("Paste your link here !");
    const [print,setPrint]=useState(false);
    function getData(val){
      setLink(val.target.value);
    }
    function onClickhandler(){
      if(link===""){
        alert("Please enter a URL");
      }
      setPrint(true);
      alert(link);
    }
   
  return (
    <div className="link-container">
    <input type="text" className="input-link" 
     placeholder={link}
     onChange={getData}/>
    <button className="btn"
    onClick={onClickhandler}
    >Submit
    </button>
     </div>
  )
}

export default Link