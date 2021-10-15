import axiosClient from './axiosClient';

class NewsAPI {
  getAll = () => {
    const url = `/news`;
    return axiosClient.get(url);
  };
}
const newsAPI = new NewsAPI();
export default newsAPI;
