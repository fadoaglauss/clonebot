import api from '../baseUrl';

export default (guid, resource, key) => {

  return api.post('/commands',{

    "id":guid,
    "method": "set",
    resource,
   "type": "application/json",
    "uri": "/buckets/blip_portal%3Abuilder_published_global_actions"
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      }});
}