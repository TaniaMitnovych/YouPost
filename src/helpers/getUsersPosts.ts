import axios from "axios"

const getUsersPosts = (url: string, userId: number) => {
  return axios.get(`${url}/posts?userId=${userId}`);
}

export default getUsersPosts;