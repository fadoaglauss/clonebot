import React, { useState } from 'react';
import {NotificationContainer,NotificationManager} from 'react-notifications';
import handleGetOrigin from './services/handleGetOrigin';
import handleSetPublished from './services/handleSetPublished';
import handleSetWorkingConfiguration from './services/handleSetWorkingConfiguration';
import handleGetWorkFlow from './services/handleGetWorkFlow';
import handleGetGlobais from './services/handleGetGlobais';
import handleGetGlobaisPublished from './services/handleGetGlobaisPublished';
import handleSetPublishedFlow from './services/handleSetPublishedFlow'
import handleGetWorkFlowPublished from './services/handleGetWorkFlowPublished'
import guid from './utils/guid';
import 'react-notifications/lib/notifications.css';


function Login(){
  
   const [keyOrigin, setKeyOrigin] = useState(localStorage.getItem('keyOne'));
   const [keyTarget, setKeyTarget] = useState(localStorage.getItem('keyTwo'));
   const [loading, setLoading] = useState(false);
    
  
  async function start(event) {
  event.preventDefault();


  if(!keyOrigin && !keyTarget){
    NotificationManager.warning('Faltam dados. Por favor, verifique as Keys origem e destino!', 'aviso!');
    return false;
    
  }

  const keyOne = keyOrigin.split('key');
  const keyTwo = keyTarget.split('key');

  if (keyOne.includes('key') || keyTwo.includes('key') ) {
    NotificationManager.warning('key digitada, não é um key válida', 'aviso!');
    return false;
  } 
  
  setLoading(true);

 const comeBackHandleGerOrigin = await handleGetOrigin(guid(), keyOrigin);
 const { data } = comeBackHandleGerOrigin;


  await handleSetPublished(guid(), data.resource, keyTarget);

  await handleSetWorkingConfiguration(guid(), data.resource, keyTarget);

  const comeBackHandleGetWorkFlow = await handleGetWorkFlow(guid(), keyOrigin);

  const {result = data } = comeBackHandleGetWorkFlow

  await handleSetPublishedFlow(result.resource, keyTarget);

  await handleGetWorkFlowPublished(guid(), result.resource, keyOrigin );

  await handleGetGlobais(guid(), keyOrigin);



 const comeBckHandleGetGlobaisPublished = await
 handleGetGlobaisPublished(guid(), result.resource , keyTarget);
  
 if (comeBckHandleGetGlobaisPublished.status === 200) {

   setTimeout(() => {
   setLoading(false);
    NotificationManager.success('Bot clonado com sucesso', 'Concluido!');
  }, 500);
   setKeyOrigin('')
   setKeyTarget('');

 } else {

  NotificationManager.error('Verifique se as keys estão corretas', 'Concluido!');

 }
}

 function setLocaStorageKey1(e) {

     setKeyOrigin(e)
     localStorage.setItem('keyOne', e )

  }
  function setLocaStorageKey2(e) {

    setKeyTarget(e);
    localStorage.setItem('keyTwo',e)
  }

  function clear() {

    localStorage.removeItem('keyOne');
    localStorage.removeItem('keyTwo');

     setKeyOrigin('');
     setKeyTarget('');
  }


    const loader = (
      <div className="load">
        <div id="space-loader"></div>
        <div id="loader"></div><br />
        <p style={{fontSize:'14px', color:'white'}}>
          Aguarde enquanto estamos clonando seu bot ...</p>
      </div>
    )
    const page = (
     
      <div className="fadeIn animated" style={{padding:'30px'}}>
        <div className="home">
          <div className="">
            <form className="">
              <div className="form-group">
                <h2 style={{marginTop:'0px', marginBottom:'30px', textAlign:'center'}}><img src="../../assets/logo.png" 
                style={{fontSize:'60px', marginBottom:'10px', width:'20%'}} alt="logo"/><br />CloneBots</h2>

                <input  value={keyOrigin} 
                onChange={(event) => setLocaStorageKey1(event.target.value)} 
                type="text" name="origem" className="" id="exampleInputEmail1" aria-describedby="emailHelp" 
                placeholder="Digite o bot origem." required />
              </div>
              <div className="form-group">
                <input  value={keyTarget} 
                onChange={(event) => setLocaStorageKey2(event.target.value)} 
                type="texta" name="destion" className="" id="exampleInputPassword1" 
                placeholder="Digite o bot target." required />
                
              </div>

             <div className="text-center">
              <button type="submit" onClick={start} style={{marginRight:"10px"}} className="">Clonar Bot</button>
              <button type="button" onClick={clear} style={{marginRight:"10px"}} className="clear">limpar</button>
             </div>
            </form>
          </div>
        </div>
        <NotificationContainer/>
      </div>
       
     
    )
    return (
      <div className="">
        {loading ? loader : page}
      </div>
    );
  }


export default Login;
