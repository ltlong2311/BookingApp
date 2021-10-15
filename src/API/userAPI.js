import axiosClient from './axiosClient';
import queryString from 'query-string';
class UserAPI {
  login = data => {
    const url = '/login';
    return axiosClient.post(url, data);
  };
  getOne = ID => {
    const url = `/users/${ID}`;
    console.log(url);
    return axiosClient.get(url);
  };
  changeOne = (data, token) => {
    const url = '/users';
    return axiosClient.put(url, queryString.stringify(data), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        token: token,
      },
    });
  };
}
const userAPI = new UserAPI();
export default userAPI;
