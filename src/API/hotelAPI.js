import axiosClient from './axiosClient';

class HotelAPI {
  getAll = () => {
    const url = `/hotels`;
    return axiosClient.get(url);
  };
  getOne = (ID) => {
    const url = `/hotels/${ID}`;
    console.log(url);
    return axiosClient.get(url);
  };
  getByLocation = (locationID) => {
    const url = `/search-hotels/${locationID}`;
    console.log(url);
    return axiosClient.get(url);
  };
  search = data => {
    const url = '/search-hotels';
    return axiosClient.post(url, data);
  };
}
const hotelAPI = new HotelAPI();
export default hotelAPI;
