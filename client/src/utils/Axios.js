import Axios from "axios";

let baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_URL_PRODUCTION
    : process.env.REACT_APP_BACKEND_URL;

const intence = Axios.create({
  baseURL,
});

export default intence;
