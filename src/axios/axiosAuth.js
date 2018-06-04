import Axios from "axios";

const authAxios = Axios.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});

// authAxios.defaults.headers.common.someThing = "someThing";

export default authAxios;