import React, { useState, useEffect } from "react";
import Quote from "../Quote";

function Image() {
  const url = "https://source.unsplash.com/random?morning";
  const [img, setImg] = useState(null);

  const fetchImg = async () => {
    const response = await fetch(url);
    const image = await response.blob();
    setImg(URL.createObjectURL(image));
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <div className="image">
      <img src={img} alt="" />
      <Quote />
    </div>
  );
}

export default Image;
