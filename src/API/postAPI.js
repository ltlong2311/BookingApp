import axiosClient from './axiosClient';

class PostAPI {
  getAll = () => {
    const url = `/posts`;
    return axiosClient.get(url);
  };
  getByLocation = (ID) => {
    const url = `/posts/${ID}`;
    return axiosClient.get(url);
  };
}
const postAPI = new PostAPI();
export default postAPI;
