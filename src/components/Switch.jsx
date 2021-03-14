// components/AddTodo.js

// ... other imports
import React, { useState } from 'react'
import Switch from 'react-switch'

const SwitchTheme = ({ theme, toogle }) => {
  const [checked, setChecked] = useState(theme.title === 'light' ? false : true)

  const onSwitchChange = () => {
    setChecked(!checked)
    toogle()
  }

  return (
    <section style={{display: 'flex', justifyContent: 'flex-end'}}>
      <div>
        <Switch
          checked={checked}
          onChange={onSwitchChange}
          handleDiameter={30}
          onColor="#86d3ff"
          onHandleColor="#08f"
          height={30}
          width={60}
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                paddingRight: 2,
              }}>
              🌞
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                paddingRight: 2,
              }}>
              🌜
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </div>
    </section>
  )
}

export default SwitchTheme
