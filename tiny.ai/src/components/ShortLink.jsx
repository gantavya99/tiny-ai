import React from 'react'
import Link from './Link'
const ShortLink = () => {
  return (
    <div className="Short-link">
          
    <input type="text" className="shorten-link" 
    placeholder="Your tiny link will be displayed here"/>
    <button className="copy-btn">COPY</button>
    </div>
  )
}

export default ShortLink