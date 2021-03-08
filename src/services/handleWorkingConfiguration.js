import command from '../utils/command'

async function getWorkingConfiguration(key) {
  return await command.get('/buckets/blip_portal:builder_working_configuration?$take=1000', key)
}

async function setWorkingConfiguration(resource, key) {
    await command.set('/buckets/blip_portal%3Abuilder_working_configuration', 'application/json', resource, key)
}


async function handleWorkingConfiguration(originKey, targetKey) {
  let workingConfiguration = await getWorkingConfiguration(originKey)  
  await setWorkingConfiguration(workingConfiguration.data.resource, targetKey)

  return workingConfiguration
}

export default handleWorkingConfiguration