import { HOST } from "@env";
import { useEffect, useState } from "react";

export const useImage = (image) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    console.log("useImage hook:", HOST);
    if (image) {
      const imageURL = image.replace("public\\uploads\\", "");
      setImageUrl(`${HOST}/uploads/${imageURL}`);
    }
  }, [image]);

  return { imageUrl };
};
