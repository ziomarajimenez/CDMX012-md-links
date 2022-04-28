const axios = require('axios');

const validateLinks = (links) => new Promise((resolve, reject) => {
  if(!links){
      reject("There is no link")
  }
  let allLinks = links.map((obj) => {
    return axios
      .get(obj.href)
      .then(res => {
        //console.log('*');
        const data = {
            ...obj,
            status: res.status,
            ok: 'ok',
        }
        return data
      })
      .catch(error => {
        const data = {
            ...obj,
            status: error.response.status,
            ok: 'fail',
        }
        return data
      })
  })
  resolve(Promise.all(allLinks));
});

module.exports = validateLinks;