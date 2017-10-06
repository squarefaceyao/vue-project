import axios from 'axios'
import {datasetUrl} from './url'

const datasetApi = {
  postDataset(dataset) {
    return axios.post(datasetUrl.base, dataset)
  },
  getPage(page, size) {
    return axios.get(datasetUrl.base, {
      params: {
        page: page,
        size: size
      }
    })
  },
  getById(id) {
    return axios.get(datasetUrl.addId(id))
  },
  deleteById(id) {
    return axios.delete(datasetUrl.addId(id))
  },
  getFiles(id) {
    return axios.get(datasetUrl.opsFile(id))
  },
  postFile(id, data) {
    return axios({
      url: datasetUrl.opsFile(id),
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    })
  }
}

export default datasetApi
