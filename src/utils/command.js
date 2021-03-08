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
    return this._send(key, 'get', uri)
  }

  static set(uri, type, resource, key) {
    return this._send(key, 'set', uri, type, resource)
  }
}

export default Command
