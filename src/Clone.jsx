import React, { useState } from 'react'
import Switch from './components/Switch'
import { Input, Home } from './styles/clone'
import { LoadingText } from './styles/loader'
import { StyledButton } from './styles/buttons'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import Checkbox from './components/Checkbox'

import handleFlow from './services/handleFlow.js'
import handleGeneralConfiguration from './services/handleGeneralConfiguration.js'
import handleGlobalActions from './services/handleGlobalActions'
import handleResources from './services/handleResources'

function Clone({ theme, toogleTheme }) {
  const [originKey, setOriginKey] = useState(localStorage.getItem('keyOne'))
  const [targetKey, setTargetKey] = useState(localStorage.getItem('keyTwo'))
  const [loading, setLoading] = useState(false)
  const [resourceOption, setResourceOption] = useState(
    localStorage.getItem('resourceOption')
      ? localStorage.getItem('resourceOption')
      : 'false',
  )
  const [advancedCofigOption, setAdvancedCofigOption] = useState(
    localStorage.getItem('advancedCofigOption')
      ? localStorage.getItem('advancedCofigOption')
      : 'false',
  )
  const [globalActionsOption, setGlobalActionsOption] = useState(
    localStorage.getItem('globalActionsOption')
      ? localStorage.getItem('globalActionsOption')
      : 'false',
  )
  const [flowOption, setFlowOption] = useState(
    localStorage.getItem('flowOption')
      ? localStorage.getItem('flowOption')
      : 'false',
  )

  async function start(event) {
    event.preventDefault()

    if (!originKey && !targetKey) {
      NotificationManager.warning(
        'Faltam dados. Por favor, verifique as Keys origem e destino!',
        'aviso!',
      )
      return false
    }

    if (!originKey.includes('Key') || !targetKey.includes('Key')) {
      NotificationManager.warning('key digitada, não é um key válida', 'aviso!')
      return false
    }

    setLoading(true)

    if (localStorage.getItem('flowOption') == 'true') {
      handleFlow(originKey, targetKey)
    }
    if (localStorage.getItem('advancedCofigOption') == 'true') {
      handleGeneralConfiguration(originKey, targetKey)
    }
    if (localStorage.getItem('globalActionsOption') == 'true') {
      handleGlobalActions(originKey, targetKey)
    }
    if(localStorage.getItem('resourceOption') == 'true') {
      handleResources(originKey, targetKey)
    }

    let status = 200

    if (status === 200) {
      setTimeout(() => {
        setLoading(false)
        NotificationManager.success('Bot clonado com sucesso', 'Concluido!')
      }, 500)
      setOriginKey('')
      setTargetKey('')
    } else {
      NotificationManager.error(
        'Verifique se as keys estão corretas',
        'Concluido!',
      )
    }
  }

  function setLocaStorageKey1(e) {
    setOriginKey(e)
    localStorage.setItem('keyOne', e)
  }
  function setLocaStorageKey2(e) {
    setTargetKey(e)
    localStorage.setItem('keyTwo', e)
  }

  function setGlobalActions(e) {
    setGlobalActionsOption(e)
    localStorage.setItem('globalActionsOption', e)
  }

  function setAdvancedCofig(e) {
    setAdvancedCofigOption(e)
    localStorage.setItem('advancedCofigOption', e)
  }

  function setFlowCheck(e) {
    setFlowOption(e)
    localStorage.setItem('flowOption', e)
  }

  function setResource(e) {
    setResourceOption(e)
    localStorage.setItem('resourceOption', e)
  }

  function clear() {
    localStorage.removeItem('keyOne')
    localStorage.removeItem('keyTwo')
    localStorage.removeItem('localTheme')
    localStorage.removeItem('resourceOption')
    localStorage.removeItem('advancedCofigOption')
    localStorage.removeItem('globalActionsOption')
    localStorage.removeItem('flowOption')

    setOriginKey('')
    setTargetKey('')
  }

  const loader = (
    <div className='clone'>
      <div class='element element-1'></div>
      <div class='element element-2'></div>
      <br />
      <LoadingText>Aguarde enquanto estamos clonando seu bot ...</LoadingText>
    </div>
  )

  const page = (
    <div className='fadeIn animated' style={{ padding: '30px' }}>
      <Home>
        <Switch toogle={toogleTheme} theme={theme} />
        <div className=''>
          <form className=''>
            <div className='form-group'>
              <h2
                style={{
                  marginTop: '0px',
                  marginBottom: '30px',
                  textAlign: 'center',
                  userSelect: 'none',
                }}>
                <img
                  src='../../assets/logo.png'
                  style={{
                    fontSize: '60px',
                    marginBottom: '10px',
                    width: '20%',
                  }}
                  alt='logo'
                />
                <br />
                Clone BLiP Bots
              </h2>

              <Input
                value={originKey}
                onChange={event => setLocaStorageKey1(event.target.value)}
                type='text'
                name='origem'
                className=''
                placeholder='Digite a key do bot de origem'
                required
              />
            </div>
            <div className='form-group'>
              <Input
                value={targetKey}
                onChange={event => setLocaStorageKey2(event.target.value)}
                type='text'
                name='destion'
                className=''
                placeholder='Digite a key do bot de destino'
                required
              />
            </div>
            <div className='form-group'>
              <Checkbox
                label={'Ações Globais'}
                checked={JSON.parse(globalActionsOption)}
                onClickEvent={setGlobalActions}
              />
              <Checkbox
                label={'Configurações Gerais'}
                checked={JSON.parse(advancedCofigOption)}
                onClickEvent={setAdvancedCofig}
              />
              <Checkbox
                label={'Fluxo'}
                checked={JSON.parse(flowOption)}
                onClickEvent={setFlowCheck}
              />
              <Checkbox
                label={'Recursos'}
                checked={JSON.parse(resourceOption)}
                onClickEvent={setResource}
              />
            </div>

            <div className='text-center'>
              <StyledButton
                type='submit'
                onClick={start}
                style={{ marginRight: '10px' }}
                className=''>
                Clonar Bot
              </StyledButton>
              <StyledButton
                background={{
                  light: '#00C6D7',
                  dark: '#0747A6',
                }}
                type='button'
                onClick={clear}
                style={{ marginRight: '10px' }}>
                limpar
              </StyledButton>
            </div>
          </form>
        </div>
      </Home>
      <NotificationContainer />
    </div>
  )
  return <div className=''>{loading ? loader : page}</div>
}

export default Clone
