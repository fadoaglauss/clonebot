import command from '../utils/command'

async function getWorkingFlow(key) {
  return await command.get('/buckets/blip_portal:builder_working_flow?$take=100', key)
}

async function setPublishedGlobalActions(resource, key) {
  return await command.set('/buckets/blip_portal%3Abuilder_published_global_actions', 'application/json', resource, key)  
}


async function handlePublishedGlobalActions(originKey, targetKey) {
  let workingFlow = await getWorkingFlow(originKey)
  return await setPublishedGlobalActions(workingFlow.data.resource, targetKey)
}

export default handlePublishedGlobalActions;