const axios = require('axios');

const URL = "http://api.open-notify.org/astros.json";

axios
  .get(URL)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));