import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

      setLoading(false);

    }, 1000);

  },[loading])


    const loader = (
      <div className="load">
        <div id="space-loader"></div>
        <div id="loader"></div><br />
        <p style={{fontSize:'14px', color:'white'}}>Carregando...</p>
      </div>
    )
    const children = (
      <div style={{width:'400px', height:'400px'}}>
        <Switch>
            <Route path="/" component={(Login)} />
        </Switch>
      </div>
    )
    return (
      <div className="">
        {loading ? loader : children}
      </div>
    );
  }


export default App;