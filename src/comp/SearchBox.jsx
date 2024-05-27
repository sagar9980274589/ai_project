import React from 'react'
import './SearchBox.css'
const SearchBox = () => {
  return (
    <div className='SearchBox'> 
    <div className="me">
    <input type='search' name="prompt" placeholder="type here... " className="SearchBoxi"/>
    <div>
    <span class="material-symbols-outlined">
add_a_photo
</span>
<span class="material-symbols-outlined">
mic
</span>
</div>
    </div>
    
    </div>
  )
}

export default SearchBox