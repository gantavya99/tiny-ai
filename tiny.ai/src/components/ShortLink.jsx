import React from 'react';
import { useState } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
const ShortLink = () => {
  const[shortenLink,setShortenLink]=useState("Hello world");
  const[copied,setCopied]=useState(false);
  useEffect(()=>{
    const timer = setTimeOut
  })
  return (
    <div className="Short-link">
          
    <p className="shorten-link">{shortenLink} </p>
    <CopyToClipboard text={shortenLink}
    onCopy={()=>setCopied(true)}
    >
    <button className="copy-btn">COPY</button>
    </CopyToClipboard>
    
    </div>
  )
}

export default ShortLink