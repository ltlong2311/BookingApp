import axiosClient from './axiosClient';

const headers = {
  'Content-Type': 'application/json',
};
class HotelAPI {
  getAll = () => {
    const url = `/hotels`;
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
