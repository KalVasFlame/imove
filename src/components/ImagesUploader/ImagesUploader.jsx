import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const ImagesUploader = ({
  setImages,
  resetImages,
  status,
  setStatus,
}) => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const onChange = (e) => {
    if (uploadedImages.length > 5) {
      return;
    }
    setUploadedImages([...uploadedImages, ...e.target.files]);
    setImages(e.target.files);
    setStatus("uploaded");
  };

  useEffect(() => {
    console.log("yoyo");
    setUploadedImages([]);
  }, [resetImages]);

  return (
    <Box>
      <Box>
        <input type="file" multiple onChange={(e) => onChange(e)} />
      </Box>

      {status === "uploaded" && (
        <Box mt={2}>
          {uploadedImages.map((image, i) => {
            const url = URL.createObjectURL(image);
            return (
              <img
                key={i}
                alt={image.name}    
                src={url}
                width={320}
                height={320}
                style={{ marginRight: 10 }}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default ImagesUploader;
