import command from '../utils/command'

async function getWorkingFlow(key) {
  return await command.get('/buckets/blip_portal:builder_working_flow?$take=100', key)
}

async function setWorkingFlow(resource, key) {
    return await command.set('/buckets/blip_portal%3Abuilder_working_flow', 'application/json', resource, key)
  }
  

async function handleWorkingFlow(originKey, targetKey) {  
  let workingFlow = await getWorkingFlow(originKey)
  await setWorkingFlow(workingFlow.data.resource, targetKey)

  return workingFlow
}

export default handleWorkingFlow
