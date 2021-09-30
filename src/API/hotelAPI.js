import axiosClient from "./axiosClient";

const headers = {
  "Content-Type": "application/json",
};
class HotelAPI {
  getAll = (params) => {
    const url = "/hotels";
    return axiosClient.get(url, { params });
  };
}
const hotelAPI = new HotelAPI();
export default hotelAPI;
