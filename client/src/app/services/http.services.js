import axios from 'axios'
import logger from './log.service'
import { toast } from 'react-toastify'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndPoint

axios.interceptors.response.use(
  (res) => res,
  function(error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    if (!expectedErrors) {
      logger.log(error)
      toast.error('Server Error!')
      // console.log("Unexpected Error");
    }
    return Promise.regect(error)
  }
)

const httpService = {
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
}

export default httpService
