import command from '../utils/command'

async function getGlobalActions(key) {
  return await command.get('/buckets/blip_portal:builder_working_global_actions?$take=100', key)
}

async function setGlobalActions(resource, key) {
  await command.set('/buckets/blip_portal%3Abuilder_working_global_actions', 'application/json', resource, key)  
}


async function handleGlobalActions(originKey, targetKey) {
  const globalActions = await getGlobalActions(originKey)
  await setGlobalActions(globalActions.data.resource, targetKey)
}

export default handleGlobalActions;