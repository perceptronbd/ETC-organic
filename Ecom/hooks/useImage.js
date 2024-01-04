import { HOST } from "@env";
import { useEffect, useState } from "react";

export const useImage = (image) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (image) {
      const imageURL = image.replace(/public\\uploads\\/g, "");

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
