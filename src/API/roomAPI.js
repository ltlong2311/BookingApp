import axiosClient from './axiosClient';

class RoomAPI {
  bookRoom = (data, token) => {
    const url = '/bookRooms';
    console.log(data);
    console.log(token);
    return axiosClient.post(url, data, {
      headers: {
        token: token,
      },
    });
  };
}
const roomAPI = new RoomAPI();
export default roomAPI;
