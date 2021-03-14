import command from '../utils/command'

async function getWorkingConfiguration(key) {
  return await command.get('/buckets/blip_portal:builder_working_configuration?$take=1000', key)
}

async function setWorkingConfiguration(resource, key) {
  await command.set('/buckets/blip_portal%3Abuilder_working_configuration', 'application/json', resource, key)
}

async function setPublishedConfiguration(resource, key) {
  return await command.set( '/buckets/blip_portal%3Abuilder_published_configuration', 'application/json', resource, key)
}


async function handleGeneralConfiguration(originKey, targetKey) {
  const generalConfiguration = await getWorkingConfiguration(originKey)

  await setWorkingConfiguration(generalConfiguration.data.resource, targetKey)
  await setPublishedConfiguration(generalConfiguration.data.resource, targetKey)
}

export default handleGeneralConfiguration