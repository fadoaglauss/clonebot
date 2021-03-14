import React, { useState, useEffect } from 'react'
import { CheckBoxMaterial } from '../styles/checkbox'

const Checkbox = ({ label, checked, onClickEvent }) => {
  const [isChecked, setIsChecked] = useState(JSON.parse(checked) ? true : false)

  return (
    <CheckBoxMaterial className='checkbox'>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          onClick={() => {
            setIsChecked(JSON.parse(checked) ? false : true)
            onClickEvent(!JSON.parse(checked))
          }}
        />
        <span className='checkbox-material'>
          <span class='check'></span>
        </span>{' '}
        {label}{' '}
      </label>
    </CheckBoxMaterial>
  )
}

export default Checkbox
