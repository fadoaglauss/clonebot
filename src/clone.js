import React, { useState } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import Switch from './components/Switch'
import { Input, Home } from './styles/clone'
import { StyledButton } from './styles/buttons'
import 'react-notifications/lib/notifications.css'
import { LoadingText } from './styles/loader'

import handleResources from './services/handleResources'
import handleGlobalActions from './services/handleGlobalActions'
import handlePublishedGlobalActions from './services/handlePublishedGlobalActions'
import handleWorkingConfiguration from './services/handleWorkingConfiguration'
import handleWorkingFlow from './services/handleWorkingFlow'
import handlePublishedFlow from './services/handlePublishedFlow'
import handlePublishedConfiguration from './services/handlePublishedConfiguration'

function Clone({ theme, toogleTheme }) {
  const [originKey, setOriginKey] = useState(localStorage.getItem('keyOne'))
  const [targetKey, setTargetKey] = useState(localStorage.getItem('keyTwo'))
  const [loading, setLoading] = useState(false)

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

    handleResources(originKey, targetKey)
    handleWorkingConfiguration(originKey, targetKey)
    handlePublishedConfiguration(originKey, targetKey)

    handleWorkingFlow(originKey, targetKey)
    handlePublishedFlow(originKey, targetKey)

    handleGlobalActions(originKey, targetKey)

    const { status } = await handlePublishedGlobalActions(originKey, targetKey)

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

  function clear() {
    localStorage.removeItem('keyOne')
    localStorage.removeItem('keyTwo')
    localStorage.removeItem('localTheme')

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
