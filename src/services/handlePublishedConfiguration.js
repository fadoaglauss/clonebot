import command from '../utils/command'

async function getWorkingConfiguration(key) {
  return await command.get('/buckets/blip_portal:builder_working_configuration?$take=1000', key)
}

async function setPublishedConfiguration(resource, key) {
  return await command.set( '/buckets/blip_portal%3Abuilder_published_configuration', 'application/json', resource, key)
}


async function handlePublishedConfiguration(originKey, targetKey) {
  let workingConfiguration = await getWorkingConfiguration(originKey)
  await setPublishedConfiguration(workingConfiguration.data.resource, targetKey)
}

export default handlePublishedConfiguration
