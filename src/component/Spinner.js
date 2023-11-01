import React from 'react'
import loading from '../load-37_256.gif'

const Spinner = () => {
  return (
    <div style={{textAlign:'center',marginTop:'4px' }}>
      <img src={loading} alt="" style={{height:'80px'}} />
    </div>
  )
}

export default Spinner
