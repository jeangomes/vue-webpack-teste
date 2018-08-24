import axios from 'axios'

const urlBaseMarvel = 'http://relatorio.prsonline.com.br/api/usuario'
const apiKey = '5e3735b69dc80e8bf8599e8dbd989b42'

export default {
  getAllComics: (limit, callback) => {
    const urlComics = urlBaseMarvel
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics)
      }
    })
  }
}
