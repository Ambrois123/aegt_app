import React from 'react'
import '../Change/Change.css'

function Change() {
  return (
    <div>
        <label className='toggle'>
            <input type='checkbox'></input>
            <span className='slider'></span>
            <span className='labels' data-on='' data-off=''></span>
        </label>
    </div>
  )
}

export default Change