import Axios from "axios";

const intence = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default intence;
