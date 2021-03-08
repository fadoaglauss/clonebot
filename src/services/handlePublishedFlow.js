import command from '../utils/command'

async function getWorkingFlow(key) {
  return await command.get('/buckets/blip_portal:builder_working_flow?$take=100', key)
}

async function setPublishedFlow(resource, key) {
  return await command.set('/buckets/blip_portal%3Abuilder_published_flow', 'application/json', resource, key)
}


async function handlePublishedFlow(originKey, targetKey) {
  let workingFlow = await getWorkingFlow(originKey)
  await setPublishedFlow(workingFlow.data.resource, targetKey)
}

export default handlePublishedFlow
