import axiosClient from "./axiosClient";

const headers = {
  "Content-Type": "application/json",
};
class LocationAPI {
  getAll = (params) => {
    const url = "/locations";
    return axiosClient.get(url, { params });
  };
}
const locationAPI = new LocationAPI();
export default locationAPI;
