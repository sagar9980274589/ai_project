import React from 'react'
import './Sboxes.css'
const Sboxes = (props) => {
  return (
    <div className='Sboxes'>
<span>{props.des}</span>
<div className="cir">
<span class="pen material-symbols-outlined">
draw
</span>
</div>
    </div>
  )
}

export default Sboxes