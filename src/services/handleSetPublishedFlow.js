import api from '../baseUrl';

export default (resource, key) => {
  return api.post('/commands',{

    "id":"61d82a14-adf0-4ddd-aeb1-73736eca083e",
    "method": "set",
     resource,
     "type": "application/json",
    "uri": "/buckets/blip_portal%3Abuilder_working_flow"
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
  }});
}