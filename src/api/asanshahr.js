import axios from 'axios';
const proxy = 'https://cors-anywhere.herokuapp.com/';

export default axios.create({
  baseURL: `${proxy}http://api.asanshahr.com/api`
});
