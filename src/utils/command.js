import { v4 as uuidv4 } from 'uuid'
import api from './baseURL'

class Command {
  static _send(key, method, uri, type = undefined, resource = undefined) {
    return api.post(
      '/commands',
      {
        id: uuidv4(),
        method,
        type,
        resource,
        uri,
      },
      {
        headers: {
          Authorization: key,
        },
      },
    )
  }

  static get(uri, key) {
    const response = this._send(key, 'get', uri)
    if (response.status != 'success') {
      throw new Error(`Get ${uri} status is not success`)
    }

    return response
  }

  static set(uri, type, resource, key) {
    const response = this._send(key, 'set', uri, type, resource)
    if (response.status != 'success') {
      throw new Error(`Set ${uri} status is not success`)
    }

    return response
  }
}

export default Command