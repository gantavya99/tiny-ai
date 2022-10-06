import axios from "axios";
export const fetchData = async({link,setShortLink})=>{
    try{
      const response = await axios( `https://api.shrtco.de/v2/shorten?url=${link}`
      );
         setShortLink(response.data.result.full_short_link);
      
    }
    catch(e){
      console.log(e);
    }
  };