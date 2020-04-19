import api from '../baseUrl';

export default (guid, resource, key) => {

  return api.post('/commands',{

    "id": guid,
    "method": "set",
    resource,
    "type": "application/json",
    "uri": "/buckets/blip_portal%3Abuilder_published_configuration"
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      }});

}