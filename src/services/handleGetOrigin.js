import api from '../baseUrl';

export default (guid, apikey) => {

    return api.post('/commands',{
          "id":guid,
          "method": "get",
          "uri": "/buckets/blip_portal:builder_working_configuration?$take=1000"
          },{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': apikey
            }});
    
}