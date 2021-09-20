export const addImageV2 = url => 
    new Promise((resolve, reject) => {
        const imgElem = document.createElement('img');
        imgElem.alt = 'Image';
        imgElem.src = url;
        document.querySelector('.page').append(imgElem);
        document.addEventListener('load', () => {
          const { width, height } = imgElem;
          resolve({ width, height });
        });
        document.addEventListener('error', () => 
          reject('Image load failed')
        );
    }); 

// examples

addImageV2('https://server.com/image.png')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'