import React from 'react'
import './Rbutton.css'
const Rbutton = (props) => {
  return (
    <div>
        <button className='Rbutton'> {props.logo}   {props.rchat}
<span id="dots" class="material-symbols-outlined ">
more_vert
</span></button>
    </div>
  )
}

export default Rbutton