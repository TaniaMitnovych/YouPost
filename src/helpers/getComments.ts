import axios from "axios"

const getComments = (url: string, postId: number) => {
  return axios.get(`${url}/comments?postId=${postId}`);
}

export default getComments;