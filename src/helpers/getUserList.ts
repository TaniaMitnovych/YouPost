import axios from "axios"

const getUserList = (url: string) => {
  return axios.get(`${url}/users`);
}

export default getUserList;