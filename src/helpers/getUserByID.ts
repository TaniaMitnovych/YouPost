import axios from "axios"

const getUserByID = (url: string, id: number) => {
  return axios.get(`${url}/users/${id}`);
}

export default getUserByID;