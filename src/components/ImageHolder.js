import React, { useState } from 'react';

export const ImageHolder = () => {
   const imageURL = "https://www.wallpaperup.com/uploads/wallpapers/2013/03/21/55607/cbd1d03ee741eb366ec55cdde1230c28-375.jpg";
   //const [image, setImage] = useState(imageURL);
   const [image] = useState(imageURL);

   return (
      <div>
         <img src={image} alt="pic" style={style.image}></img>
      </div>
   );
};

const style = {
   image: {
      width: "300px",
      height: "250px",
   }
};