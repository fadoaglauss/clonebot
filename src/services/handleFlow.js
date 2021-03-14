import command from '../utils/command'

async function getWorkingFlow(key) {
  return await command.get('/buckets/blip_portal:builder_working_flow?$take=100', key)
}

async function setWorkingFlow(resource, key) {
  return await command.set('/buckets/blip_portal:builder_working_flow', 'application/json', resource, key)
}

async function setPublishedFlow(resource, key) {
  return await command.set('/buckets/blip_portal:builder_published_flow', 'application/json', resource, key)
}


async function handleFlow(originKey, targetKey) {
  let flow = await getWorkingFlow(originKey)

  await setWorkingFlow(flow.data.resource, targetKey)
  await setPublishedFlow(flow.data.resource, targetKey)
}

export default handleFlow