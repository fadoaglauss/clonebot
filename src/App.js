import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Clone from './clone'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global'
import { Loader, LoadingText } from './styles/loader'

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(
    localStorage.getItem('localTheme')
      ? localStorage.getItem('localTheme')
      : JSON.stringify(light),
  )

  const toogleTheme = () => {
    const newTheme = theme.includes('light') ? dark : light
    setTheme(JSON.stringify(newTheme))
    localStorage.setItem('localTheme', JSON.stringify(newTheme))
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [loading])

  const loader = (
    <div className="load">
      <div id="space-loader"></div>
      <Loader />
      <br />
      <LoadingText>Carregando...</LoadingText>
    </div>
  )
  const children = (
    <div style={{ width: '400px', height: '400px' }}>
      <Switch>
        <Route
          path="/"
          render={() => (
            <Clone
              theme={theme.includes('light') ? light : dark}
              toogleTheme={toogleTheme}
            />
          )}
        />
      </Switch>
    </div>
  )
  return (
    <ThemeProvider theme={theme.includes('light') ? light : dark}>
      <GlobalStyle />
      <div className="">{loading ? loader : children}</div>
    </ThemeProvider>
  )
}

export default App
