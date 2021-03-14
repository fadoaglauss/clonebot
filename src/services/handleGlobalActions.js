import command from '../utils/command'

async function getWorkingGlobalActions(key) {
  return await command.get('/buckets/blip_portal:builder_working_global_actions?$take=100', key)
}

async function setWorkingGlobalActions(resource, key) {
  await command.set('/buckets/blip_portal%3Abuilder_working_global_actions', 'application/json', resource, key)  
}

async function setPublishedGlobalActions(resource, key) {
  return await command.set('/buckets/blip_portal%3Abuilder_published_global_actions', 'application/json', resource, key)  
}


async function handleGlobalActions(originKey, targetKey) {
  const globalActions = await getWorkingGlobalActions(originKey)
  
  await setWorkingGlobalActions(globalActions.data.resource, targetKey)
  await setPublishedGlobalActions(globalActions.data.resource, targetKey)
}

export default handleGlobalActions;