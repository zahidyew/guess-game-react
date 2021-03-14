import React, { useContext } from 'react';
import ImageContext from '../contexts/ImageContext';

export const ImageHolder = () => {
   //const imageURL = "https://www.wallpaperup.com/uploads/wallpapers/2013/03/21/55607/cbd1d03ee741eb366ec55cdde1230c28-375.jpg";
   //const [image, setImage] = useState(imageURL);
   const { image } = useContext(ImageContext);

   return (
      <div style={style.div}>
         <img src={image.url} alt="pic" style={style.image}></img>
      </div>
   );
};

const style = {
   div: {
      minWidth: "310px",
      minHeight: "260px"
   },
   image: {
      width: "300px",
      height: "250px",
   }
};