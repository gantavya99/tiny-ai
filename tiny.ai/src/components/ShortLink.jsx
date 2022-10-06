import React from 'react';
import axios from 'axios';
import Link from './Link';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';



const ShortLink = ({link}) => {

  const [shortLink, setShortLink] = useState("");
   const fetchData = async()=>{
    try{
      const response = await axios( `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      setShortLink(response.data.result.full_short_link);
      console.log(response);
    }
    catch(e){
      console.log(e);
    }
  };
  return (
    <div className="Short-link">
          
    {/* <input type="text" className="shorten-link" 
    placeholder="Your tiny link will be displayed here"/> */}
    <CopyToClipboard text={shortLink}>
    <button className="copy-btn">COPY</button>
    </CopyToClipboard>
   
    </div>
  )
}

export default ShortLink