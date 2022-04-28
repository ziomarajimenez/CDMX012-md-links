const totalLinks =  (array) =>{
  return  array.length;
}

const  uniqueLinks = (array) => {
  let unique = new Set (array.map((obj) => obj.href)).size;
  return unique;
}

const  brokenLinks = (array) => {
  let bkn = 0;
      for(let obj of array) {
        if(obj.ok !== 'ok'){
            bkn += 1;  
        }};
  return bkn;
}
  
  // console.log(brokenLinks([
  //   {
  //     href: 'https://es.wikipedia.org/wiki/Markdon',
  //     text: 'Markdown',
  //     file: 'docs\\fileOne.md',
  //     status: 404,
  //     ok: 'fail'
  //   },
  //   {
  //     href: 'https://nodejs.org/',
  //     text: 'Node.js',
  //     file: 'docs\\fileOne.md',
  //     status: 200,
  //     ok: 'ok'
  //   },
  //   {
  //     href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
  //     text: 'md-links',
  //     file: 'docs\\fileOne.md',
  //     status: 404,
  //     ok: 'fail'
  //   }]));

   module.exports = totalLinks;
  module.exports =uniqueLinks;
  module.exports = brokenLinks;

  
