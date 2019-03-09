import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://react-burger-builder-39f61.firebaseio.com/'
});

export default axiosOrders;