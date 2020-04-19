import api from '../baseUrl';

export default (guid, key ) => {
  
  return api.post('/commands',{

    "id": guid,
    "method": "get",
    "uri": "/buckets/blip_portal:builder_working_global_actions?$take=100"
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      }});
}