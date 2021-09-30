import axiosClient from "./axiosClient";
class UserAPI {
  login = (data) => {
    const url = "/login";
    return axiosClient.post(url, data);
  };
}
const userAPI = new UserAPI();
export default userAPI;
