import { useState } from "react";

export function useMediaHandler() {
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleMediaChange = (e) => {
    if (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 300; // Adjust as needed
            canvas.height = 375; // 4:5 aspect ratio
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const resizedMedia = canvas.toDataURL(file.type);
            setMedia(resizedMedia);
            setMediaPreview(resizedMedia);
          };
        };
        reader.readAsDataURL(file);
      }
    } else {
      setMedia(null);
      setMediaPreview(null);
    }
  };

  return { media, handleMediaChange, mediaPreview };
}
