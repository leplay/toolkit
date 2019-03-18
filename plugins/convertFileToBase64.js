export default function (file) {
  return new Promise(function (resolve, reject) {
    if (!file || typeof FileReader === 'undefined') {
      return reject(new Error())
    }
    try {
      // eslint-disable-next-line
      const reader = new FileReader()
      reader.onloadend = function () {
        resolve(reader.result)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      reject(error)
    }
  })
}
