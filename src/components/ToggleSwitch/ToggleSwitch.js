import React from 'react'
import '../ToggleSwitch/ToggleSwitch.css'

function ToggleSwitch({isLight, toggleTheme}) {
  return (
    <div>
        <label className="switch">
            <input 
            onChange={toggleTheme} 
            type="checkbox"
             />
            <span className="slider round"></span>
        </label>
    </div>
  )
}


export default ToggleSwitch