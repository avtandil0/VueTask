import axios from 'axios'

function CallApi(config: any) {
  return axios
    .request(config)
    .then((response: any) => {
      return response
    })
    .then(({ data }: any) => {
      return data
    })
    .catch((error: any) => {
      return Promise.reject(error)
    })
}

export default CallApi
