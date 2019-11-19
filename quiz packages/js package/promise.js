// const ninjaPromise = new Promise((resolve, reject) => {
//   resolve('harrori')
// })
// ninjaPromise.then(ninja => {
//   assert(ninja === 'hattori')
// })
const promise = new Promise ((resolve, reject) => {
  undeclaredVariable ++
})
promise.then(() => console.log('hello'))
  .catch(error => console.log(error))

  function getJSON(url) {
    return new Promise((resolve, reject)=> {
      const request = new XMLHttpRequest()
      request.open('GET', url)
      request.onload = function () {
        try {
          if (this.status === 200) {
            resolve(JSON.parse(this.response))
          } else {
            reject(this.status + ' ' + this.statusText)
          }
        } catch (e) {
          reject(e.message)
        }
      
      }
      request.send()
    })
  }

  getJSON('data/nanjas.json').then(ninjas => {
    console.log(ninjas);
  }).catch(error => console.log(error))

console.log(global);
  console.log(XMLHttpRequest);
