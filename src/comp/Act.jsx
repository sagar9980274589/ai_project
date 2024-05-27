import React from 'react'
import './Act.css'
import Rbutton from './Rbutton'
const Act = () => {
  return (
    <div className='act'>

      <div className="up1">
        <span class="lst material-symbols-outlined">
lists
</span>

<button className='NC'><span class="material-symbols-outlined">
add
</span>   New chat</button>
</div>
      <div className="mid1">
        Recent 
      <Rbutton rchat="how to do ..." logo={<span class="material-symbols-outlined">
chat_bubble
</span> }/>
<Rbutton rchat="how to do ..." logo={<span class="material-symbols-outlined">
chat_bubble
</span> }/>
<Rbutton rchat="how to do ..." logo={<span class="material-symbols-outlined">
chat_bubble
</span> }/>
      
      
      </div>
      <div className="foot1">
      <Rbutton rchat="Help" logo={<span class="material-symbols-outlined">
help
</span>}/>
      <Rbutton rchat="Activity" logo={<span class="material-symbols-outlined">
history
</span>}/>
      <Rbutton rchat="Settings" logo={<span class="material-symbols-outlined">
settings
</span>}/>
      </div>
    </div>
  )
}

export default Act