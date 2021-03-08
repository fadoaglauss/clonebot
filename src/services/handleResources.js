import command from '../utils/command'

async function getResources(key) {
  let response = await command.get('/resources', key)

  if (response.status === 200) {
    return response.data.resource.items.map(resource => {
      return command.get(`/resources/${resource}`, key).then(response => {
        return {
          name: resource,
          type: response.data.type,
          data: response.data.resource,
        }
      })
    })
  }
}

async function setResources(resources, key) {
  for (let resource of resources) {
    resource = await resource
    await command.set(`/resources/${resource.name}`, resource.type, resource.data, key)
  }
}


async function handleResources(originKey, targetKey) {
  const resources = await getResources(originKey)

  if (resources) {
    await setResources(resources, targetKey)
  }
}

export default handleResources
