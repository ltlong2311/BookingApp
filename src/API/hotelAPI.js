import axiosClient from './axiosClient';

const headers = {
  'Content-Type': 'application/json',
};
class HotelAPI {
  getAll = params => {
    const url = '/hotels';
    return axiosClient.get(url, {params});
  };
  search = data => {
    const url = '/search-hotels';
    return axiosClient.post(url, data);
  };
}
const hotelAPI = new HotelAPI();
export default hotelAPI;
