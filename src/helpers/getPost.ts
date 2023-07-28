import axios from "axios"

const getPost = (url: string, id: number) => {
  return axios.get(`${url}/posts/${id}`);
}

export default getPost;