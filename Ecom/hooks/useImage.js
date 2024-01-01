import { HOST } from "@env";
import { useEffect, useState } from "react";

export const useImage = (image) => {
  console.log("useImage hook:", image);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    console.log("useImage hook:", HOST);
    if (image) {
      const imageURL = image.replace(/public\\uploads\\/g, "");
      console.log("useImage imageURL:", imageURL);
      setImageUrl(`${HOST}/uploads/${imageURL}`);
    }
  }, [image]);

  //set image url function

  const setImage = (img) => {
    const imageURL = img.replace("public\\uploads\\", "");
    setImageUrl(`${HOST}/uploads/${imageURL}`);
  };

  return { imageUrl, setImage };
};
