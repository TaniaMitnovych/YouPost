import axios from "axios"

const getPosts = (url: string) => {
  return axios.get(`${url}/posts`);
}

export default getPosts;