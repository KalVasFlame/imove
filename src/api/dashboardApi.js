import axios from "axios";

export const postPost = async (title, description, type, images) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("type", type);
  formData.append("images", images);

  await axios.post("https://httpbin.org/post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getPosts = async () => {
  const response = await axios.get("https://cars.ct.ws/json_get.php");
  console.log(response.data);

  return response.data;
};